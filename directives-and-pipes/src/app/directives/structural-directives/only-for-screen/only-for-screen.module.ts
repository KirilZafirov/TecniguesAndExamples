import { OnlyForScreenDirective } from './only-for-screen.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule],
    declarations: [OnlyForScreenDirective],
    exports: [OnlyForScreenDirective],
    providers:[    { provide: 'windowObject', useValue: window}]
})
export class OnlyForSreenModule { }