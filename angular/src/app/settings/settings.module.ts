import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PaymentmethodComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
