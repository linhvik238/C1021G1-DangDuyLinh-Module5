import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductUpdateComponent} from './product/product-update/product-update.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {
    path: 'list', component: ProductListComponent
  }, {
    path: 'create', component: ProductCreateComponent
  },
  {
    path: 'edit/:id', component: ProductUpdateComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
