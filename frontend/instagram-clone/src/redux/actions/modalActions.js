import { TOGGLE_MODAL } from "../types";

export const toggleModal = selectedPost => {
    return {
        type: TOGGLE_MODAL,
        payload: selectedPost
    };
};
