import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SharedModule } from '../shared/shared.module';
import { MerchandisesalesComponent } from './merchandisesales/merchandisesales.component';


@NgModule({
  declarations: [
    SalesComponent,
    MerchandisesalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule
  ]
})
export class SalesModule { }
