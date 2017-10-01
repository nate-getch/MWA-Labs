import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  @select() count;
  tada;
  constructor() {
    this.count.subscribe(
      (c) => {
        if (c == 0) {
          this.tada = 'Count is ZERO. ~ your subscriber'
        } else {
          this.tada = ''
        }
      }
    );

  }

  ngOnInit() {
  }

}
