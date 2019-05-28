export class User {
  firstName: string;
  lastName: string;
  _id?: string;
  username: string;
  password: string;
  fullName: string;
  constructor() {
    this.fullName = this.firstName + " " + this.lastName;
  }
}
