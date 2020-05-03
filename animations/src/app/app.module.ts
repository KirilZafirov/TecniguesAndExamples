import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenCloseAnimationComponent } from './open-close.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseAnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
