import 'source-map-support/register'

import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  APIGatewayProxyHandler
} from 'aws-lambda'
// import * as AWS from 'aws-sdk'
import { createLogger } from '../../utils/logger'
import { getUserId } from '../utils'
import { generateUploadUrl } from '../../businessLogic/posts'

// const s3 = new AWS.S3({
//   signatureVersion: 'v4'
// })
// const bucketName = process.env.IMAGES_S3_BUCKET
// const urlExpiration = process.env.SIGNED_URL_EXPIRATION

// const docClient = new AWS.DynamoDB.DocumentClient()
// const postsTable = process.env.TODOS_TABLE

const logger = createLogger('generate-upload-url')

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const postId = event.pathParameters.postId

  logger.info('get upload url for post', postId)
//   const url = getUploadUrl(postId)

  // TODO: Return a presigned URL to upload a file for a TODO item with the provided id
//   logger.info('Url is ', url)

  logger.info('Update Post attachmentUrl')

    const url = await generateUploadUrl(postId, getUserId(event))

//   await docClient
//     .update({
//       TableName: postsTable,
//       Key: {
//         postId,
//         userId: getUserId(event)
//       },
//       UpdateExpression: 'set attachmentUrl = :url',
//       ExpressionAttributeValues: {
//         ':url': `https://${bucketName}.s3.amazonaws.com/${postId}`
//       },
//       ReturnValues: 'UPDATED_NEW'
//     })
//     .promise()

  logger.info('Post Updated')

  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      uploadUrl: url
    })
  }
}

// function getUploadUrl(postId: string) {
//   return s3.getSignedUrl('putObject', {
//     Bucket: bucketName,
//     Key: postId,
//     Expires: urlExpiration
//   })
// }
