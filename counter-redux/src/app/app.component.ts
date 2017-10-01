import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { IAppState, INITIAL_STATE } from './store/store';
import { rootReducer } from './store/reducer';
import { actions } from './store/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Counter with Angular-Redux';
  @select() count;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  increment() {
    this.ngRedux.dispatch({ type: actions.INCREMENT })
  }
}
