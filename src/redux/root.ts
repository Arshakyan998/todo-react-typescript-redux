import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { list } from "./reducers/List";

const root=combineReducers({
        list

})

export const store=createStore(root,composeWithDevTools())

export type rootState=ReturnType<typeof root>