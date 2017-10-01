import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';

export const actions = {
    ADD_TOPIC : 'ADD_TOPIC'
}

@Injectable()
export class ActionService {

    constructor(private ngRedux: NgRedux<IAppState>) { }

    addTopicAction(topicText: String) {
        this.ngRedux.dispatch({
            type: actions.ADD_TOPIC,
            text: topicText
        })
        // return {
        //     type: ADD_TOPIC,
        //     text: topicText 
        // }
    }
}