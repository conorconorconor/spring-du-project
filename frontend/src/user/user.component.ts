import { Component, OnInit } from "@angular/core";
import { Consultant } from "src/consultant/consultant";
import { UserService } from "./user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/services/auth.service";
import { User } from "./user";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["../shared/styles/consultant.component.scss"]
})
export class UserComponent implements OnInit {
  public consultants: Consultant[];
  public consultants$: Observable<Consultant[]>;
  private user: User;
  public user$: Observable<User>;
  public tableHeaders: string[] = [
    "lastName",
    "firstName",
    "role",
    "title",
    "email",
    "removeFromTeam"
  ];

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.authService.getUserFromLocalStorage();
    this.user$ = this.authService.getUser();
    this.user$.subscribe(user => {
      this.consultants = user.consultants;
    });
  }

  public getConsultants() {
    this.consultants$ = this.userService.getConsultants(this.user);
  }

  goToConsultant(consultant: Consultant): void {
    this.router.navigate([`consultants/${consultant._id}`]);
  }

  removeFromTeam(e: Event, consultant: Consultant): void {
    e.stopPropagation();
    this.userService.removeConsultant(consultant).subscribe(user => {
      this.consultants = user.consultants;
      console.log(this.consultants);
    });
    // this.user$ = this.authService.getUser();
    // this.user$.subscribe(user => {
    //   const i = user.consultants.findIndex(el => el._id === consultant._id);
    //   this.consultants.splice(i, 1);
    //   console.log(this.consultants);
    //   this.userService.removeConsultant(consultant);
    // });
  }
}
