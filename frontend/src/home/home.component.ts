import { Component } from "@angular/core";
import { User } from "../app/models/user";
import { Credentials } from "../app/models/credentials";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["../shared/styles/home.scss"]
})
export class HomeComponent {
  public loggedInUser: User;
  // TODO: Bind username and password to inputs
  public credentials: Credentials = new Credentials();

  constructor(public router: Router) {}

  // TODO: Bind login to button
  public login(): void {
    // TODO: Validate inputs are defined
    if (this.credentials.username && this.credentials.password) {
      let newUser = new User();
      newUser.username = this.credentials.username;
      this.loggedInUser = newUser;
      this.router.navigate(["consultants"]);
    } else {
      const msg = "you need to put something in both fields";
      console.log(msg);
    }
    // TODO: If valid, assign a new User object (with username) to loggedInUser
  }
}
