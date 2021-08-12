import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from '../guards/product-detail.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { 
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ ProductDetailGuard ] 
      }
    ]),
    SharedModule
  ],
  exports:[
    ProductListComponent,
    ProductDetailComponent,
  ]
})
export class ProductModule { }
