import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductTypeService } from '@proxy/caikdduopos/application-services';
import { ProductTypeComponent } from './product-type/product-type.component';

const routes: Routes = [
  { path: 'productlist', component: ProductComponent },
  { path: 'producttypelist', component: ProductTypeComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
