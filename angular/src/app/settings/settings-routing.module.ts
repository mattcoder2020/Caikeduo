import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';

const routes: Routes = [{ path: 'paymentmethodlist', component: PaymentmethodComponent }, { path: '', component: SettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
