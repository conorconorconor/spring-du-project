import { Document } from "mongoose";
import { IComment } from "./comment";

export interface IConsultant extends Document {
  firstName?: string;
  lastName?: string;
  email?: string;
  title?: string;
  role?: string;
  comments?: IComment[];
}
