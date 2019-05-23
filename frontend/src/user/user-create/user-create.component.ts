import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { Credentials } from "../../app/models/credentials";
import { Router } from "@angular/router";
import { AuthService } from "src/services/auth.service";
import { MatSnackBar } from "@angular/material";
import { UserService } from "../user.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["../../shared/styles/home.scss"]
})
export class UserCreateComponent implements OnInit {
  public user: User = new User();
  constructor(
    private userService: UserService,
    public router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  public createUser(form: NgForm): void {
    if (form.valid) {
      this.userService.createUser(this.user).subscribe(() => {
        this.router.navigate(["/"]);
        this.snackBar.open("User Created", "", {
          duration: 3000,
          panelClass: ["green-snackbar"]
        });
      });
    }
  }
}
