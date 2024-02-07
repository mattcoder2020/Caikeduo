import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';

const routes: Routes = [{ path: 'paymentmethodlist', component: PaymentmethodComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
