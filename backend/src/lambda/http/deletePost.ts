import 'source-map-support/register'

import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  APIGatewayProxyHandler
} from 'aws-lambda'
// import * as AWS from 'aws-sdk'
import { createLogger } from '../../utils/logger'
import { getUserId } from '../utils'
import { deletePost } from '../../businessLogic/posts'

// const docClient = new AWS.DynamoDB.DocumentClient()
// const postsTable = process.env.TODOS_TABLE

const logger = createLogger('delete-post')

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const postId = event.pathParameters.postId

  // no id handler
  if (!postId) {
    return {
      statusCode: 404,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: ''
    }
  }

  logger.info('Deleting post ', postId)

  //   await docClient
  //     .delete({
  //       TableName: postsTable,
  //       Key: { postId: postId, userId: getUserId(event) }
  //     })
  //     .promise()

  await deletePost(postId, getUserId(event))

  logger.info('Post Deleted ', postId)

  // TODO: Remove a TODO item by id
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify('Post Deleted successfully.')
  }
}
