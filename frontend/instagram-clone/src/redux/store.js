import { createStore } from "redux";
import rootReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const store = createStore(rootReducers, initialState, composeWithDevTools());

export default store;