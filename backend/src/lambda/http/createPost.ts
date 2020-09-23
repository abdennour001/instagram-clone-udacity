import "source-map-support/register";

import {
    APIGatewayProxyEvent,
    APIGatewayProxyHandler,
    APIGatewayProxyResult
} from "aws-lambda";
import { CreatePostRequest } from "../../requests/CreatePostRequest";
import { createLogger } from "../../utils/logger";
import { getUserId } from "../utils";
import * as uuid from "uuid";
import { createPost } from "../../businessLogic/posts";

const logger = createLogger("create-post");

export const handler: APIGatewayProxyHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const newPost: CreatePostRequest = JSON.parse(event.body);
    const postId = uuid.v4();

    logger.info("Check if name is not empty string");
    if (newPost["caption"] === "" || newPost["photoUrl"] === "") {
        // name is invalid
        logger.info("Caption and Photo must be provided");
        return {
            statusCode: 404,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: "Please enter a valid name."
        };
    }

    // add auth user ID to our post
    logger.info("Creating a new post", newPost);

    let newPost_ = {
        postId,
        userId: getUserId(event),
        createdAt: new Date().toLocaleString(),
        likes: 0,
        ...newPost
    };

    await createPost(newPost_, getUserId(event));

    logger.info("Post created", createPost);

    return {
        statusCode: 201,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify({
            item: newPost_
        })
    };
};
