import { TOGGLE_MODAL } from "../types";

const initialState = {
    isOpened: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                isOpened: !state.isOpened
            };

        default:
            return state;
    }
};