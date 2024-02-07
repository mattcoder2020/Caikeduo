import { Component, OnInit } from '@angular/core';
import { MerchandiseSalesService } from '@proxy/caikdduopos/application-services/merchandise-sales.service';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared'; 
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerRangePopup} from '../../shared/date-picker/date-picker.component';
import { Router } from '@angular/router';
import { MerchandiseSalesDto } from '@proxy/caikdduopos/dto';

@Component({
  selector: 'app-merchandisesales',
  templateUrl: './merchandisesales.component.html',
  styleUrls: ['./merchandisesales.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class MerchandisesalesComponent implements OnInit{
  MerchandiseSales = { items: [], totalCount: 0 } as PagedResultDto<MerchandiseSalesDto>;
  form: FormGroup; // add this line

  selectedMerchandiseSales = {} as MerchandiseSalesDto;
  //queryDto = {} as ProductQueryDto;


  isModalOpen = false;
  constructor(public readonly list: ListService, 
    private MerchandiseSalesService: MerchandiseSalesService,
    private fb: FormBuilder, 
    private confirmation: ConfirmationService,
    private router: Router) 
  {}

  ngOnInit() {

    const MerchandiseSalesStreamCreator = (query) => this.MerchandiseSalesService.getMerchandiseSalesWithDetail(query);

    this.list.hookToQuery(MerchandiseSalesStreamCreator).subscribe((response) => {
      this.MerchandiseSales = response;
    });
  }

  create() {
    this.selectedMerchandiseSales = {} as MerchandiseSalesDto;
    this.buildForm(); // add this line
    this.isModalOpen = true;
  }

  edit(id: string) {
    this.MerchandiseSalesService.get(id).subscribe((merchandisesales) => {
      this.selectedMerchandiseSales= merchandisesales;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

   delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', 'AbpAccount::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.MerchandiseSalesService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  // add buildForm method
  buildForm() {
    this.form = this.fb.group({
      id: [this.selectedMerchandiseSales.id|| null],
     
              });
  }


 
  // add save method
  save() {
    if (this.form.invalid) {
      return;
    }
    const request = this.selectedMerchandiseSales.id
    ? this.MerchandiseSalesService.update(this.selectedMerchandiseSales.id, this.form.value)
    : this.MerchandiseSalesService.create(this.form.value);

    request.subscribe(() => {
    this.isModalOpen = false;
    this.form.reset();
    this.list.get();
    });
   
  }


}
