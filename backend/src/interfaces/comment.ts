import { Document } from "mongoose";

export interface IComment extends Document {
  text: string;
  teamManagerId: string;
  publishDate: Date;
}
