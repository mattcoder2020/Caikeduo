import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { NgbdDatepickerRangePopup } from  '../shared/date-picker/date-picker.component';

const routes: Routes = [{ path: '', component: StoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
