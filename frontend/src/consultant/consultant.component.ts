import { Component, OnInit } from "@angular/core";
import { ConsultantService } from "./consultant.service";
import { Consultant } from "./consultant";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-consultant",
  templateUrl: "./consultant.component.html",
  styleUrls: ["../shared/styles/consultant.component.scss"]
})
export class ConsultantComponent implements OnInit {
  public consultants$: Observable<Consultant[]>;
  public tableHeaders: string[] = [
    "last name",
    "first name",
    "role",
    "title",
    "email"
  ];
  constructor(
    private consultantService: ConsultantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getConsultants();
  }

  getConsultants(): void {
    this.consultants$ = this.consultantService.getConsultants();
  }

  goToConsultant(consultant: Consultant): void {
    this.router.navigate([`consultants/${consultant._id}`]);
    console.log(consultant);
  }

}
