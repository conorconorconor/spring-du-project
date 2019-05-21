import { Document } from "mongoose";

export interface IComment extends Document {
  text: string;
}