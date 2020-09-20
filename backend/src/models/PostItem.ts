export interface PostItem {
  userId: string
  postId: string
  createdAt: string
  name: string
  dueDate: string
  done?: boolean
  attachmentUrl?: string
}
