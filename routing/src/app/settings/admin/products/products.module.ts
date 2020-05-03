import { ParamsDirective } from './../../../directives/route-params.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductsComponent } from './products/products.component'; 
import { ProductsRoutingModule } from './products-routing.module';
import { DetailsComponent } from './details/details.component';
import { ProductsSpecialComponent } from './products-special/products-special.component';




@NgModule({
  declarations: [
    ProductsComponent,
    DetailsComponent,
    ProductsSpecialComponent,
    ParamsDirective
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  providers: [
  ]
})
export class ProductsModule { }
