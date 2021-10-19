import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PagesProductComponent } from './presentation/pages/pages-product/pages-product.component';
import { FormularioProductoComponent } from './presentation/views/formulario-producto/formulario-producto.component';

import { ProductComponent } from './presentation/views/product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesProductComponent,
    ProductComponent,
    FormularioProductoComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],
  exports:[
    PagesProductComponent
  ]
})
export class ProductsModule { }
