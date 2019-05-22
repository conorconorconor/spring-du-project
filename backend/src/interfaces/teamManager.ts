import { Document } from "mongoose";
import { IConsultant } from "./consultant";

export interface ITeamManager extends Document {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  consultants?: IConsultant[];
}
