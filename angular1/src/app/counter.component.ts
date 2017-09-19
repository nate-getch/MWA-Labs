import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <div class="col-md-4">
      Child component 
      </div>
      <div class="col-md-4">
      <button (click) = "decrement()" >-</button>
      {{counterValue}}
      <button (click) = "incrment()">+</button>
      </div>
      <div class="clearfix"></div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  @Input() counterValue = 0;

  @Output()
  counterChange = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  incrment() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
  decrement() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

  emitData() {
    this.counterChange.emit(this.counterValue);
  }

}
