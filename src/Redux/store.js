import { combineReducers, createStore, applyMiddleware } from "redux";
import skillReducer from './skill-reducer.js';
import taskReducer from './task-reducer.js';
import {reducer as formReducer} from 'redux-form';
import thunk from "redux-thunk";



let reducers = combineReducers({
   skills: skillReducer,
   form: formReducer,
   task: taskReducer
})

 export let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;