import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales.component';
import { MerchandisesalesComponent } from './merchandisesales/merchandisesales.component';

const routes: Routes = [{ path: 'saleslist', component: SalesComponent },
 { path: 'merchandisesaleslist', component: MerchandisesalesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
