import { Document } from "mongoose";

export interface IConsultant extends Document {
  firstName?: string;
  lastName?: string;
}
