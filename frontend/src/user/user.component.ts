import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "./user";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["../shared/styles/user.scss"]
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => (this.users = users));
  }
}
