import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'app';
  public counterValParent:number = 0;

  updateCounterFromChild(data){
    this.counterValParent = data;
  }
}
