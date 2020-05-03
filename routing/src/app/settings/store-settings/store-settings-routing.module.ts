import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  StoreSettingsComponent } from './store-settings.component';

const routes: Routes = [
  {
    path: '', component:  StoreSettingsComponent,
    data: {
      breadcrumb: 'Store'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  StoreSettingsRoutingModule { }
