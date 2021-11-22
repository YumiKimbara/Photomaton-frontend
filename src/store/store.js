import { createStore } from "redux";
import modalReducer from "../reducers/reducers.js"

export const store = createStore(modalReducer)
