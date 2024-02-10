import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales.component';
import { MerchandisesalesComponent } from './merchandisesales/merchandisesales.component';
import { WholesalesComponent } from './wholesales/wholesales.component';

const routes: Routes = [{ path: '', component: SalesComponent },
 { path: 'merchandisesaleslist', component: MerchandisesalesComponent },
 { path: 'wholesaleslist', component: WholesalesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
