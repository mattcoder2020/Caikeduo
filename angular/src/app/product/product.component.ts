import { Component, OnInit } from '@angular/core';
import { ProductService } from '@proxy/caikdduopos/application-services/product.service';
import { ProductTypeService } from '@proxy/caikdduopos/application-services/product-type.service';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { ProductDto, ProductTypeDto, StoreDto, StoreQueryDTO } from '@proxy/caikdduopos/dto/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared'; 
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { storeStatusOptions } from '@proxy/caikdduopos/enums';
import {NgbdDatepickerRangePopup} from '../shared/date-picker/date-picker.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],

})
export class ProductComponent implements OnInit{
  Products = { items: [], totalCount: 0 } as PagedResultDto<ProductDto>;
  ProductTypes = { items: [], totalCount: 0 } as PagedResultDto<ProductTypeDto>;
  form: FormGroup; // add this line

  // add bookTypes as a list of BookType enum members
  //StatusTypes = ProductStatusOptions;
  selectedProduct = {} as ProductDto;
  //queryDto = {} as ProductQueryDto;


  isModalOpen = false;
  constructor(public readonly list: ListService, 
    private ProductService: ProductService, 
    private ProductTypeService: ProductTypeService,
    private fb: FormBuilder, 
    private confirmation: ConfirmationService) 
  {}

  ngOnInit() {
    const ProductStreamCreator = (query) => this.ProductService.getProductsWithDetail(query);

    this.list.hookToQuery(ProductStreamCreator).subscribe((response) => {
      this.Products = response;
    });

    const ProductTypeStreamCreator = (query) => this.ProductTypeService.getList(query);

    this.list.hookToQuery(ProductTypeStreamCreator).subscribe((response) => {
      this.ProductTypes = response;
    });
  }

  createProduct() {
    this.selectedProduct = {} as ProductDto;
    this.buildForm(); // add this line
    
    this.isModalOpen = true;
  }

  editProduct(id: number) {
    this.ProductService.get(id).subscribe((Product) => {
      this.selectedProduct= Product;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  getProductTypeName(productTypeId: number): string {
    const productType = this.ProductTypes.items.find(type => type.id === productTypeId);
    return productType ? productType.name : 'Unknown';
  }
  // suspendProduct(id: string) {
  //   this.ProductService.get(id).subscribe((Product) => {
  //     this.selectedProduct= Product;})
  //     this.selectedProduct.status = 1; 

  //   const request = this.ProductService.update(this.selectedProduct.id, this.ProductService.covertProductDto(this.selectedProduct))
  //   request.subscribe(() => {
  //       this.list.get();
  //   });
  // }

  deleteProduct(id: number) {
    this.confirmation.warn('::AreYouSureToDelete', 'AbpAccount::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.ProductService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  // add buildForm method
  buildForm() {
    this.form = this.fb.group({
      id: [this.selectedProduct.id|| null],
      name: [this.selectedProduct.name|| null, Validators.required],
      price: [this.selectedProduct.price || null, Validators.required],
      description: [this.selectedProduct.description || null, Validators.required],
      cost: [this.selectedProduct.cost || null, Validators.required],
      productTypeId: [this.selectedProduct?.productType?.id || null],

         });
  }

  // add save method
  save() {
    if (this.form.invalid) {
      return;
    }
    const request = this.selectedProduct.id
    ? this.ProductService.update(this.selectedProduct.id, this.form.value)
    : this.ProductService.create(this.form.value);

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
