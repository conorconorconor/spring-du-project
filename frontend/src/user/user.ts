import { Consultant } from "src/consultant/consultant";

export class User {
  firstName: string;
  lastName: string;
  _id?: string;
  username: string;
  password: string;
  consultants: Consultant[];
  fullName: string;
  constructor() {
    this.fullName = this.firstName + " " + this.lastName;
  }
}
