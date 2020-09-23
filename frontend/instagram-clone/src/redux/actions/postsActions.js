import { FETCH_POSTS, CREATE_POST, REMOVE_POST } from "../types";

export const fetchPosts = posts => {
    return {
        type: FETCH_POSTS,
        payload: posts
    };
};

export const createPost = post => {
    return {
        type: CREATE_POST,
        payload: post
    };
};

export const removePost = post => {
    return {
        type: REMOVE_POST,
        payload: post
    };
};
