import { Component, OnInit } from '@angular/core';
import { ProductService } from '@proxy/caikdduopos/application-services/product.service';
import { ProductTypeService } from '@proxy/caikdduopos/application-services/product-type.service';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { ProductDto, ProductTypeDto, StoreDto, StoreQueryDTO } from '@proxy/caikdduopos/dto/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared'; 
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { storeStatusOptions } from '@proxy/caikdduopos/enums';
import { NgbdDatepickerRangePopup} from '../../shared/date-picker/date-picker.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
 
  styleUrls: ['./product-type.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class ProductTypeComponent implements OnInit{
  ProductTypes = { items: [], totalCount: 0 } as PagedResultDto<ProductTypeDto>;
  form: FormGroup; // add this line

  selectedProductType = {} as ProductTypeDto;
  //queryDto = {} as ProductQueryDto;


  isModalOpen = false;
  constructor(public readonly list: ListService, 
    private ProductTypeService: ProductTypeService,
    private fb: FormBuilder, 
    private confirmation: ConfirmationService,
    private router: Router) 
  {}

  ngOnInit() {

    const ProductTypeStreamCreator = (query) => this.ProductTypeService.getList(query);

    this.list.hookToQuery(ProductTypeStreamCreator).subscribe((response) => {
      this.ProductTypes = response;
    });
  }

  create() {
    this.selectedProductType = {} as ProductTypeDto;
    this.buildForm(); // add this line
    this.isModalOpen = true;
  }

  edit(id: number) {
    this.ProductTypeService.get(id).subscribe((Product) => {
      this.selectedProductType= Product;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

   delete(id: number) {
    this.confirmation.warn('::AreYouSureToDelete', 'AbpAccount::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.ProductTypeService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  // add buildForm method
  buildForm() {
    this.form = this.fb.group({
      id: [this.selectedProductType.id|| null],
      name: [this.selectedProductType.name|| null, Validators.required],
              });
  }

  navigatetoproduct()
  {
    this.router.navigate(['/product/productlist']);
    //add code to nagivate to productlist route

  }
  // add save method
  save() {
    if (this.form.invalid) {
      return;
    }
    const request = this.selectedProductType.id
    ? this.ProductTypeService.update(this.selectedProductType.id, this.form.value)
    : this.ProductTypeService.create(this.form.value);

    request.subscribe(() => {
    this.isModalOpen = false;
    this.form.reset();
    this.list.get();
    });
   
  }
  // onDateRangeChanged(event: { from: any, to: any }) {
  //   this.queryDto.creationDateFrom = event.from;
  //   this.queryDto.creationDateTo = event.to;
  // }
  // Query(){
  //   const request = this.ProductService.queryByFiltrationByQ(this.queryDto);
  //   request.subscribe((data) => {
  //     this.Products = data;
  //   });
  // }

  // ResetQuery(){
  //   this.queryDto = {} as ProductQueryDto;
  // }

}

