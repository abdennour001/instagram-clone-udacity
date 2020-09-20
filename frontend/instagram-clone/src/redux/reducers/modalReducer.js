import { TOGGLE_MODAL } from "../types";

const initialState = {
    isOpened: false,
    selectedPost: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                isOpened: !state.isOpened,
                selectedPost: action.payload
            };

        default:
            return state;
    }
};