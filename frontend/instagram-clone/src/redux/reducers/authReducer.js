import Auth from "../../auth/Auth";
import createHistory from "history/createBrowserHistory";
import { AUTH } from "../types";

const history = createHistory();

const auth0_ = new Auth(history);

const initialState = {
    auth: auth0_,
    loggedIn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            let auth__ = state.auth;
            auth__[action.payload]();
            if (action.payload === "logout") {
                return { ...state, auth: auth__, loggedIn: false };
            } else {
                return { ...state, auth: auth__, loggedIn: true };
            }

        default:
            return state;
    }
};
