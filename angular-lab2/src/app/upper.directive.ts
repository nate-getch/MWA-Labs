import { Directive, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  @HostBinding('class')
  className = 'uppercase';

  /*  // alternative approach
  constructor(renderer: Renderer2, el: ElementRef) {
    el.nativeElement.style.color = '#000';
    renderer.addClass(el.nativeElement, 'uppercase');
  } 
  */

}
