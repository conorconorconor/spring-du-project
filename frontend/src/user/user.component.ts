import { Component, OnInit } from "@angular/core";
import { Consultant } from 'src/consultant/consultant';
import { UserService } from './user.service';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["../shared/styles/consultant.scss"]
})
export class UserComponent implements OnInit {
  public consultants: Consultant[];
  public tableHeaders: string[] = [
    "last name",
    "first name",
    "role",
    "title",
    "email",
    "addToTeam"
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getConsultants().subscribe(result => {
      this.consultants = result;
    })
  }
}
