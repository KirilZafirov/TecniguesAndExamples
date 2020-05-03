import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateRoutingModule } from './rate-routing.module';
import { RateComponent } from './rate/rate.component';




@NgModule({
  declarations: [
    RateComponent
  ],
  imports: [
    CommonModule,
    RateRoutingModule
  ],
  providers: [
  ]
})
export class RateModule { }
