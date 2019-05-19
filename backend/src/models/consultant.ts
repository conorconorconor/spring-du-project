import { Schema, Model, model } from "mongoose";
import { IConsultant } from "../interfaces/consultant";

const ConsultantSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
});

export const Consultant: Model<IConsultant> = model<IConsultant>(
  "Consultant",
  ConsultantSchema
);
