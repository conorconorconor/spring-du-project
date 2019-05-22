import { Model, Schema, model } from "mongoose";
import { ITeamManager } from "../interfaces/teamManager";

const TeamManagerSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  consultants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Consultant"
    }
  ]
});

export const TeamManager: Model<ITeamManager> = model<ITeamManager>(
  "TeamManager",
  TeamManagerSchema
);
