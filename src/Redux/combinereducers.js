import { combineReducers } from "redux";
import { reducerCounter } from "./reducer";
import { productReducer } from "./products/reducer";



export const rootReducer=combineReducers(
    {
        products: productReducer,
        counter: reducerCounter
    }
)