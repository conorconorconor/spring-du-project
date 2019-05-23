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

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getConsultants().subscribe(result => {
      this.consultants = result;
    })
  }
}
