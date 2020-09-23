import * as uuid from 'uuid'

import { PostItem } from '../models/PostItem'
import { CreatePostRequest } from '../requests/CreatePostRequest'
import { UpdatePostRequest } from '../requests/UpdatePostRequest'
import { PostAccess } from '../dataLayer/postsAccess'

const postAccess = new PostAccess()

export async function getAllPosts(userId: string): Promise<PostItem[]> {
  return await postAccess.getAllPosts(userId)
}

export async function createPost(
  createPostRequest: CreatePostRequest,
  userId: string
) {
  const postId = uuid.v4()
  let createPost = {
    postId,
    userId,
    createdAt: new Date().toLocaleString(),
    ...createPostRequest
  }

  return await postAccess.createPost(createPost)
}

export async function deletePost(postId: string, userId: string) {
  console.log('Delete Post')
  return await postAccess.deletePost(postId, userId)
}

export async function updatePost(
  post: UpdatePostRequest,
  postId: string,
  userId: string
) {
  console.log('Update Post')
  return await postAccess.updatePost(post, postId, userId)
}

export async function generateUploadUrl(postId, userId) {
  return await postAccess.generateUploadUrl(postId, userId)
}
