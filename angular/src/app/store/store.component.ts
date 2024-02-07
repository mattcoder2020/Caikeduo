import { Component, OnInit } from '@angular/core';
import { StoreService } from '@proxy/caikdduopos/application-services/store.service';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { StoreDto, StoreQueryDTO } from '@proxy/caikdduopos/dto/models';
import { CreateStoreDto } from '@proxy/caikdduopos/dto/create/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared'; 
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { storeStatusOptions } from '@proxy/caikdduopos/enums';
import {NgbdDatepickerRangePopup} from '../shared/date-picker/date-picker.component';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class StoreComponent implements OnInit{
  stores = { items: [], totalCount: 0 } as PagedResultDto<StoreDto>;
  form: FormGroup; // add this line

  // add bookTypes as a list of BookType enum members
  StatusTypes = storeStatusOptions;
  selectedStore = {} as StoreDto;
  queryDto = {} as StoreQueryDTO;


  isModalOpen = false;
  constructor(public readonly list: ListService, private storeService: StoreService, private fb: FormBuilder, private confirmation: ConfirmationService) 
  {}

  ngOnInit() {
    const storeStreamCreator = (query) => this.storeService.getList(query);

    this.list.hookToQuery(storeStreamCreator).subscribe((response) => {
      this.stores = response;
    });
  }

  createStore() {
    this.selectedStore = {} as StoreDto;
    this.buildForm(); // add this line
    
    this.isModalOpen = true;
  }

  editStore(id: string) {
    this.storeService.get(id).subscribe((store) => {
      this.selectedStore= store;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  suspendStore(id: string) {
    this.storeService.get(id).subscribe((store) => {
      this.selectedStore= store;})
      this.selectedStore.status = 1; 

    const request = this.storeService.update(this.selectedStore.id, this.covertStoreDto(this.selectedStore))
    request.subscribe(() => {
        this.list.get();
    });
  }

  covertStoreDto = (storedto: StoreDto ) =>
  {
       let dto= {} as CreateStoreDto;
       dto.address = storedto.address;
       dto.creationDate = storedto.creationTime;
       dto.fullName = storedto.fullName;
       dto.name = storedto.name;
       dto.phone = storedto.phone
       dto.status = storedto.status;
       return dto;

  };

  deleteStore(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', 'AbpAccount::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.storeService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  // add buildForm method
  buildForm() {
    this.form = this.fb.group({
      name: [this.selectedStore.name|| null, Validators.required],
      fullname: [this.selectedStore.fullName||null, Validators.required],
      phone: [this.selectedStore.phone||null, Validators.required],
      address: [this.selectedStore.address||null, Validators.required],
      status:[this.selectedStore.status||null, Validators.required]
    });
  }

  // add save method
  save() {
    if (this.form.invalid) {
      return;
    }
    this.form.value.status = this.selectedStore.status;
    const request = this.selectedStore.id
    ? this.storeService.update(this.selectedStore.id, this.form.value)
    : this.storeService.create(this.form.value);

    request.subscribe(() => {
    this.isModalOpen = false;
    this.form.reset();
    this.list.get();
    });
   
  }
  onDateRangeChanged(event: { from: any, to: any }) {
    this.queryDto.creationDateFrom = event.from;
    this.queryDto.creationDateTo = event.to;
  }

  onselectionChanged(status: number)
  {
    this.selectedStore.status = status;
  }
  Query(){
    const request = this.storeService.queryByFiltrationByQ(this.queryDto);
    request.subscribe((data) => {
      this.stores = data;
    });
  }

  ResetQuery(){
    this.queryDto = {} as StoreQueryDTO;
  }
}

