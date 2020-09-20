import * as uuid from 'uuid'

import { PostItem } from '../models/PostItem'
import { CreateTodoRequest } from '../requests/CreatePostRequest'
import { UpdateTodoRequest } from '../requests/UpdatePostRequest'
import { TodoAccess } from '../dataLayer/postsAccess'

const todoAccess = new TodoAccess()

export async function getAllTodos(userId: string): Promise<TodoItem[]> {
  return await todoAccess.getAllTodos(userId)
}

export async function createTodo(
  createTodoRequest: CreateTodoRequest,
  userId: string
) {
  const todoId = uuid.v4()
  let createTodo = {
    todoId,
    userId,
    createdAt: new Date().toLocaleString(),
    ...createTodoRequest
  }

  return await todoAccess.createTodo(createTodo)
}

export async function deleteTodo(todoId: string, userId: string) {
  console.log('Delete Todo')
  return await todoAccess.deleteTodo(todoId, userId)
}

export async function updateTodo(
  todo: UpdateTodoRequest,
  todoId: string,
  userId: string
) {
  console.log('Update Todo')
  return await todoAccess.updateTodo(todo, todoId, userId)
}

export async function generateUploadUrl(todoId, userId) {
  return await todoAccess.generateUploadUrl(todoId, userId)
}
