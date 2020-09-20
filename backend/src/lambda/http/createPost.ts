import 'source-map-support/register'

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult
} from 'aws-lambda'
import { CreateTodoRequest } from '../../requests/CreatePostRequest'
import { createLogger } from '../../utils/logger'
import { getUserId } from '../utils'
import * as uuid from 'uuid'
import { createTodo } from '../../businessLogic/posts'

const logger = createLogger('create-todo')

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const newTodo: CreateTodoRequest = JSON.parse(event.body)
  const todoId = uuid.v4()
  // TODO: Implement creating a new TODO item

  logger.info('Check if name is not empty string')
  if (newTodo['name'] === '') {
    // name is invalid
    logger.info('Name is invalid')
    return {
      statusCode: 404,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: 'Please enter a valid name.'
    }
  }

  // add auth user ID to our todo
  logger.info('Creating a new todo', newTodo)

  let newTodo_ = {
    todoId,
    userId: getUserId(event),
    createdAt: new Date().toLocaleString(),
    ...newTodo
  }

  await createTodo(newTodo_, getUserId(event))

  //   await docClient
  //     .put({
  //       TableName: todosTable,
  //       Item: createTodo
  //     })
  //     .promise()

  logger.info('Todo created', createTodo)

  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      item: newTodo_
    })
  }
}
