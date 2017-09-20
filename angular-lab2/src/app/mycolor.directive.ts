import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  // Output that will emit outside the directive
  @Output() updateProperty: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) { }
  colors = ['blue', 'red', 'yellow', 'green']
  //numberOfClicks = 0;
  @HostListener('click', ['$event.target']) onClick(btn) {
    var rand = Math.floor(Math.random()*this.colors.length);
    this.el.nativeElement.style.color = this.colors[rand];
    //this.el.nativeElement.innerText = this.colors[rand];
    this.updateProperty.emit(this.colors[rand]);
    //console.log("button", btn, "number of clicks:", this.numberOfClicks++);
  }

}
