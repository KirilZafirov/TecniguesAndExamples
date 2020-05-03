import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

//   The benefits of using this method include:
// Our DOM is decouple from the rendering layer
// Avoid vulnerability to XSS attacks by referencing the DOM directly
// Easier to test and improves the readability
   constructor() {}

   @HostBinding('class.open') isOpen = false;

   @HostListener('click') toggleDropdown() {
     this.isOpen = !this.isOpen;
   }

   //Example using ElementRef and Angulars class Renderer2
  //  The Renderer2 API offers a way to bypass Angular’s templating and make custom UI changes that can’t be expressed declaratively. 
  //That means that web and service works can safely use this method. 
  //  constructor(
  //   private elRef: ElementRef,
  //   private renderer: Renderer2
  // ) { }

  //  @HostListener('click') toggleDropdown() {
  //    const buttonEl = this.elRef.nativeElement;
  //    const isOpen = buttonEl.classList.contains('open');

  //    if (isOpen) {
  //      this.renderer.removeClass(buttonEl, 'open');
  //    } else {
  //      this.renderer.addClass(buttonEl, 'open');
  //    }
  //  }

}
