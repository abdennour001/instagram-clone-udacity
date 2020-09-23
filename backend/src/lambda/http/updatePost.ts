import 'source-map-support/register'

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult
} from 'aws-lambda'
// import * as AWS from 'aws-sdk'
import { createLogger } from '../../utils/logger'

// const docClient = new AWS.DynamoDB.DocumentClient()
// const postsTable = process.env.TODOS_TABLE

const logger = createLogger('update-post')

import { UpdatePostRequest } from '../../requests/UpdatePostRequest'
import { getUserId } from '../utils'
import { updatePost } from '../../businessLogic/posts'

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const postId = event.pathParameters.postId
  const updatedPost: UpdatePostRequest = JSON.parse(event.body)

  // TODO: Update a TODO item with the provided id using values in the "updatedPost" object
  logger.info('update post ', updatedPost)

  const data = await updatePost(updatedPost, postId, getUserId(event))
  //   const data = await docClient
  //     .update({
  //       TableName: postsTable,
  //       Key: {
  //         postId,
  //         userId: getUserId(event)
  //       },
  //       UpdateExpression: 'set done = :done',
  //       ExpressionAttributeValues: {
  //         ':done': updatedPost['done']
  //       },
  //       ReturnValues: 'UPDATED_NEW'
  //     })
  //     .promise()

  logger.info('Post updated ', data)

  if (data) {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(JSON.stringify(data, null, 2))
    }
  } else {
    return {
      statusCode: 404,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(`Unable to update item.`)
    }
  }

  return undefined
}
