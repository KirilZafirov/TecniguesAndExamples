import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HumansComponent } from './humans/humans.component';


const routes: Routes = [
  { path: '', component: HumansComponent, 
    data: { title: 'People' , 
    breadcrumb: 'People' } }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumansRoutingModule { }
