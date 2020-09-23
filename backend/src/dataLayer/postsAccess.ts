import * as AWS from "aws-sdk";
import * as AWSXRay from "aws-xray-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

const XAWS = AWSXRay.captureAWS(AWS);

import { PostItem } from "../models/PostItem";
import { PostUpdate } from "../models/PostUpdate";

export class PostAccess {
    constructor(
        private readonly docClient: DocumentClient = createDynamoDBClient(),
        private readonly postsTable = process.env.POSTS_TABLE,
        private readonly userIdIndex = process.env.USER_ID_INDEX,
        private readonly bucketName = process.env.IMAGES_S3_BUCKET,
        private readonly urlExpiration = process.env.SIGNED_URL_EXPIRATION,

        private readonly s3 = new AWS.S3({
            signatureVersion: "v4"
        })
    ) {}

    async getAllPosts(userId): Promise<PostItem[]> {
        console.log("Getting all posts");

        const result = await this.docClient
            .query({
                TableName: this.postsTable,
                IndexName: this.userIdIndex,
                KeyConditionExpression: "userId = :userId",
                ExpressionAttributeValues: {
                    ":userId": userId
                }
            })
            .promise();

        console.log("Posts: ", result.Items);
        const posts = result.Items;
        return posts as PostItem[];
    }

    async createPost(post: PostItem): Promise<PostItem> {
        console.log("Creating post");

        await this.docClient
            .put({
                TableName: this.postsTable,
                Item: post
            })
            .promise();

        return post;
    }

    async deletePost(postId: string, userId: string): Promise<string> {
        console.log("Deleting Post");
        await this.docClient
            .delete({
                TableName: this.postsTable,
                Key: { postId: postId, userId: userId }
            })
            .promise();

        return postId;
    }

    async updatePost(post: PostUpdate, postId: string, userId: string) {
        console.log("Updating Post");
        const data = await this.docClient
            .update({
                TableName: this.postsTable,
                Key: {
                    postId,
                    userId: userId
                },
                UpdateExpression: "set caption = :caption",
                ExpressionAttributeValues: {
                    ":caption": post["caption"]
                },
                ReturnValues: "UPDATED_NEW"
            })
            .promise();

        return data;
    }

    async generateUploadUrl(postId, userId): Promise<string> {
        const url = this.getUploadUrl(postId);

        await this.docClient
            .update({
                TableName: this.postsTable,
                Key: {
                    postId,
                    userId: userId
                },
                UpdateExpression: "set photoUrl = :url",
                ExpressionAttributeValues: {
                    ":url": `https://${this.bucketName}.s3.amazonaws.com/${postId}`
                },
                ReturnValues: "UPDATED_NEW"
            })
            .promise();

        return url;
    }

    getUploadUrl(postId: string) {
        return this.s3.getSignedUrl("putObject", {
            Bucket: this.bucketName,
            Key: postId,
            Expires: this.urlExpiration
        });
    }
}

function createDynamoDBClient() {
    if (process.env.IS_OFFLINE) {
        console.log("Creating a local DynamoDB instance");
        return new XAWS.DynamoDB.DocumentClient({
            region: "localhost",
            endpoint: "http://localhost:8000"
        });
    }

    return new XAWS.DynamoDB.DocumentClient();
}
