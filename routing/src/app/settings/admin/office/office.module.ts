import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { OfficeComponent } from './office/office.component'; 
import { OfficeRoutingModule } from './office-routing.module';




@NgModule({
  declarations: [
    OfficeComponent
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule,
  ],
  providers: [
  ]
})
export class OfficeModule { }
