import { Directive, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  @HostBinding('class')
  className = 'uppercase';

  // other directive functions, for my ref.
  /*
  constructor(r: Renderer2, el: ElementRef) {
    r.addClass(el.nativeElement, 'uppercase');
    this.r.setStyle(this.el.nativeElement, 'font-size', '12px')
  }
  */

  /*
  private backgroundColor = 'blue';
  constructor(private r:Renderer2, private e:ElementRef) {   }
    @HostListener('input') inpClick() {
      // do something
    }

    @HostListener('click') click() {
      // do something
    }

    @HostListener('mouseleave') mouseleave() {
      // do something
    }

    @HostListener('mouseover') mouseover() {
      // do something
    }

    @HostBinding('style.backgroundColor') get setColor() {
      return this.backgroundColor;
    }

    @HostBinding('style.height') get sewWidth() {
      return '300px';
    }*/
}