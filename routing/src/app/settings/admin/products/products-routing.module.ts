import { ProductsSpecialComponent } from './products-special/products-special.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { DetailsResolverService } from './services/resolver.service';


const routes: Routes = [
  { path: '', component: ProductsComponent, data: { title: 'Products' , breadcrumb: 'Products' } } ,
  { path: 'products-special/:pageSize/:index/:keyword', component: ProductsSpecialComponent, data: { breadcrumb: 'Products Special' } },
  { path: 'product/:id', component: DetailsComponent , 
    data: { 
      breadcrumb: 'Product Details' ,
      title: 'Product Details'
    } ,   
    resolve: {
        details: DetailsResolverService,
      }}
  ];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DetailsResolverService]
})
export class ProductsRoutingModule { }
