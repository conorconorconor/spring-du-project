import { Document } from "mongoose";
import { IComment } from "./comment";
import { ITeamManager } from "./teamManager";

export interface IConsultant extends Document {
  firstName?: string;
  lastName?: string;
  email?: string;
  title?: string;
  role?: string;
  comments?: IComment[];
  teamManager: ITeamManager;
}
