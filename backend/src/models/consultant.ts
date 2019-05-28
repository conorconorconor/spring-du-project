import { Document, Schema, Model, model } from "mongoose";
import { IConsultant } from "../interfaces/consultant";
import { CommentSchema } from "./comment";

const ConsultantSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String
  },
  title: {
    type: String
  },
  comments: [
    {
      ref: "Comment",
      type: Schema.Types.ObjectId
    }
  ],
  teamManager: {
    ref: "TeamManager",
    type: Schema.Types.ObjectId
  }
});

export const Consultant: Model<IConsultant> = model<IConsultant>(
  "Consultant",
  ConsultantSchema
);
