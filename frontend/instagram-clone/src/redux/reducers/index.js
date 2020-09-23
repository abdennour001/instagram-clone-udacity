import { combineReducers } from "redux";

import modalReducer from "./modalReducer";
import postsReducer from "./postsReducer";
import authReducer from "./authReducer";

export default combineReducers({
    modal: modalReducer,
    posts: postsReducer,
    auth: authReducer
});
