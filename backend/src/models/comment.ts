import { Model, Schema, model } from "mongoose";
import { IComment } from "../interfaces/comment";

export const CommentSchema: Schema<IComment> = new Schema({
  text: {
    type: String,
    required: true
  },
  publishDate: {
    type: Date,
    default: () => new Date()
  }
});

export const Comment: Model<IComment> = model<IComment>(
  "Comment",
  CommentSchema
);
