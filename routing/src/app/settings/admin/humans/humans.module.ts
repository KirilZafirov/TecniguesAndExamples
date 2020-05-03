import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HumansComponent } from './humans/humans.component'; 
import { HumansRoutingModule } from './humans-routing.module';




@NgModule({
  declarations: [
    HumansComponent
  ],
  imports: [
    CommonModule,
    HumansRoutingModule,
  ],
  providers: [
  ]
})
export class HumansModule { }
