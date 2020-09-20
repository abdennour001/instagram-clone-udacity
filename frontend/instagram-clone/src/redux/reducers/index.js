import { combineReducers } from "redux";

import modalReducer from "./modalReducer";
import postsReducer from "./postsReducer";

export default combineReducers({ modal: modalReducer, posts: postsReducer });
