import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SharedModule } from '../shared/shared.module';
import { MerchandisesalesComponent } from './merchandisesales/merchandisesales.component';
import { WholesalesComponent } from './wholesales/wholesales.component';


@NgModule({
  declarations: [
    SalesComponent,
    MerchandisesalesComponent,
    WholesalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule
  ]
})
export class SalesModule { }
