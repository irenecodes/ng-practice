// Now that we have a model and our actions, we need to create a reducer. A reducer is what takes the incoming action and decides what to do with it. It takes the previous state and returns a new state based on the given action. 

import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from '../actions/tutorial.actions'

// Section 1
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        
        // Add this case:
        case TutorialActions.REMOVE_TUTORIAL:
            console.log(state)
            // bugs out on delete 
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}