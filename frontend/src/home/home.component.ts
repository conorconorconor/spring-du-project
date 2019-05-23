import { Component } from "@angular/core";
import { User } from "../app/models/user";
import { Credentials } from "../app/models/credentials";
import { Router } from "@angular/router";
import { AuthService } from "src/services/auth.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["../shared/styles/home.scss"]
})
export class HomeComponent {
  public loggedInUser: User;
  // TODO: Bind username and password to inputs
  public credentials: Credentials = new Credentials();

  constructor(
    public router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  // TODO: Bind login to button
  public async login(): Promise<void> {
    if (this.credentials.username && this.credentials.password) {
      await this.authService
        .login(this.credentials)
        .then(() => {
          this.router.navigate(["consultants"]);
        })
        .catch(err => {
          this.snackBar.open("Invalid Login", "", {
            duration: 3000
          });
        });
      //route to this user's consultants page
    }
  }
}
