import { Model, Schema } from "mongoose";

const TeamManagerSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
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
    type: String,
  },
  consultants: [{
    type: Schema.Types.ObjectId,
    ref: "Consultant"
  }]
});

