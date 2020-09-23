import 'source-map-support/register'

import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  APIGatewayProxyHandler
} from 'aws-lambda'
// import * as AWS from 'aws-sdk'
import { getUserId } from '../utils'
import { createLogger } from '../../utils/logger'
import { getAllPosts } from '../../businessLogic/posts'

// const docClient = new AWS.DynamoDB.DocumentClient()
// const postsTable = process.env.TODOS_TABLE
// const userIdIndex = process.env.USER_ID_INDEX

const logger = createLogger('get-posts')

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  // TODO: Get all TODO items for a current user

  logger.info('get posts')

  const result = await getAllPosts(getUserId(event))

  //   const result = await docClient
  //     .query({
  //       TableName: postsTable,
  //       IndexName: userIdIndex,
  //       KeyConditionExpression: 'userId = :userId',
  //       ExpressionAttributeValues: {
  //         ':userId': getUserId(event)
  //       }
  //     })
  //     .promise()

  logger.info('posts ', result)

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ items: result })
  }
}
