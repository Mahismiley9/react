import { legacy_createStore } from "@reduxjs/toolkit";
import { reducerCounter } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./combinereducers";




export const reduxStore=legacy_createStore(rootReducer,composeWithDevTools())
