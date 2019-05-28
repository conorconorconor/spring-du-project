import { Component, OnInit, ViewChild } from "@angular/core";
import { Consultant } from "src/consultant/consultant";
import { UserService } from "./user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/services/auth.service";
import { User } from "./user";
import { MatTableDataSource, MatSort } from "@angular/material";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["../shared/styles/consultant.component.scss"]
})
export class UserComponent implements OnInit {
  public consultants: Consultant[];
  public consultants$: Observable<Consultant[]>;
  public user$: Observable<User>;
  private user: User;
  public tableHeaders: string[] = [
    "lastName",
    "firstName",
    "role",
    "title",
    "email",
    "removeFromTeam"
  ];

  dataSource = new MatTableDataSource<Consultant>();

  @ViewChild(MatSort) sort: MatSort;

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
      // this.consultants = user.consultants;
      this.dataSource.data = user.consultants;
    });
    this.dataSource.sort = this.sort;
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
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
  }
}
