import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { IAppState, rootReducer, INITIAL_STATE } from '../store/store';
import { actions } from '../store/action';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  @select() count;
  amount: number = 5;
  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit() {
  }

  decrement(){
      this.ngRedux.dispatch({ type: actions.DECREMENT, amount: this.amount})
  }
  reset(){
    this.ngRedux.dispatch({ type: actions.RESET})
  }

}
