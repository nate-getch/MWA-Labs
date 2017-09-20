import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input() v: Boolean;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.v == true)
      this.el.nativeElement.style.display  = "block";
    else
      this.el.nativeElement.style.display  = "none";
  }

}
