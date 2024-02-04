import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ProductComponent
    ,ProductTypeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbDatepickerModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
