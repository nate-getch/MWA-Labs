import { Component, ViewChild } from '@angular/core';
import { IAppState } from './store/store';
import { ActionService } from './store/action';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { ITopic } from './store/itopic';

// Use the @select decorator to access your store state
// Use .dispatch() to dispatch actions

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  //topics;
  //unsubscribe;
  @ViewChild('topicText') topicText;
  @select('data') topics$: Observable<ITopic>;

  constructor(private ngRedux: NgRedux<IAppState>, private actionService: ActionService) { }

  // updateFromState(){
  //   this.topics = store.getState().data;
  // }

  // ngOnInit(){
  //   this.updateFromState();
  //   this.unsubscribe = store.subscribe(()=>{
  //     this.updateFromState();
  //   })
  // }

  // ngOnDestroy(){
  //   this.unsubscribe();
  // }

  addTopic() {
    // we can directly dispatch from here, but lets use service.
    // store.dispatch(addTopicAction(this.topicText.nativeElement.value));
    // this.ngRedux.dispatch(addTopicAction(this.topicText.nativeElement.value));
    this.actionService.addTopicAction(this.topicText.nativeElement.value);
    this.topicText.nativeElement.value = '';
  }
}
