import { User } from "./user.type.js"

export type Comment = {
  content: string,
  postDate: Date,
  rating: number,
  user: User
}
