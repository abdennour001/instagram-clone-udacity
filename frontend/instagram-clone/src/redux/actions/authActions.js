import { AUTH } from "../types";

export const callAction = action => {
    return {
        type: AUTH,
        payload: action
    };
};
