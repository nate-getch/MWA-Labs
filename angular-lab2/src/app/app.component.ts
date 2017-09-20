import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  strings: String[] = ["nati","Getch", "beti"];
  selectedColor = '';
  getColor(){
      if(this.selectedColor)
        console.log(this.selectedColor);
  }
}
