import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component:  AdminComponent,
    data: {
      breadcrumb: 'Admin'
    },
    children: [
      {
        path: 'humans',
        loadChildren: () => import('./humans/humans.module').then(m => m.HumansModule)
      },
      {
        path: 'office',
        loadChildren: () => import('./office/office.module').then(m => m.OfficeModule)
      },
      {
        path: 'rate',
        loadChildren: () => import('./rate/rate.module').then(m => m.RateModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  AdminRoutingModule { }
