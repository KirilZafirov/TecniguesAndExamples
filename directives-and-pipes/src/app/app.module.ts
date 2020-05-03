import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { OnlyForSreenModule } from './directives/structural-directives/only-for-screen/only-for-screen.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/attribute-directives/appDropdown.directive';
import { HighlightDirective } from './directives/attribute-directives/highlight.directive';
import { NgForObjectDirective } from './directives/structural-directives/ngForObject.directive';
import { CounterComponent } from './directives/component-directives/counter/counter.component';
import { CustomCounterComponent } from './directives/component-directives/custom-counter/custom-counter.component';
import { CounterDecBtnDirective } from './directives/component-directives/counter-dec-btn.directive';
import { CounterIncBtnDirective } from './directives/component-directives/counter-inc-btn.directive';
import { CounterValueDirective } from './directives/component-directives/counter-value.directive';
import { AccordionItemComponent } from './directives/component-directives/accordion/client-one.component/client-one.component';
import { AccordionItem2Component } from './directives/component-directives/accordion/client-two.component/client-two.component';
import { AccordionContentDirective } from './directives/component-directives/accordion/directives/accordion-content.directive';
import { AccordionComponent } from './directives/component-directives/accordion/accordion.component';
import { AccordionHeaderDirective } from './directives/component-directives/accordion/directives/accordion-header.directive';
import { ExponentialStrengthPipe } from './pipes/custom/exponential-strength.pipe';
import { ImpurePipe } from './pipes/custom/impure.pipe';
import { GetRowClassPipe } from './pipes/custom/get-row-class.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ...AppRoutingModule.components,
    DropdownDirective,
    HighlightDirective,
    NgForObjectDirective,
    CounterComponent,
    CustomCounterComponent,
    CounterDecBtnDirective,
    CounterIncBtnDirective,
    CounterValueDirective,
    AccordionItemComponent,
    AccordionItem2Component,
    AccordionContentDirective,
    AccordionHeaderDirective,
    AccordionComponent,
    ExponentialStrengthPipe,
    ImpurePipe,
    GetRowClassPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    OnlyForSreenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
