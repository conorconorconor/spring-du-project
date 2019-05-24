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
  private id: string | null = null;

  public consultants: Consultant[];
  public consultants$: Observable<Consultant[]>;
  private user: User;
  public tableHeaders: string[] = [
    "lastName",
    "firstName",
    "role",
    "title",
    "email",
  ];


  constructor(
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.authService.getUserFromLocalStorage();
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      this.userService.addConsultant(this.user, this.id).subscribe();
    }
    this.getConsultants();
    this.consultants$.subscribe(result => {
      console.log(result);
    });
  }

  public getConsultants() {
    this.consultants$ = this.userService.getConsultants(this.user);
  }

  goToConsultant(consultant: Consultant): void {
    this.router.navigate([`consultants/${consultant._id}`]);
  }
}
