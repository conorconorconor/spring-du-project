import { Component, OnInit } from "@angular/core";
import { ConsultantService } from "./consultant.service";
import { Consultant } from "./consultant";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { ConsultantCreateComponent } from "./consultant-create/consultant-create.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-consultant",
  templateUrl: "./consultant.component.html",
  styleUrls: ["../shared/styles/consultant.component.scss"]
})
export class ConsultantComponent implements OnInit {
  public consultant: Consultant = new Consultant();
  public consultants$: Observable<Consultant[]>;
  public tableHeaders: string[] = [
    "last name",
    "first name",
    "role",
    "title",
    "email",
    "addToTeam"
  ];
  constructor(
    private consultantService: ConsultantService,
    private router: Router,
    public dialog: MatDialog
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

  public createConsultant(): void {
    let dialog = this.dialog.open(ConsultantCreateComponent);
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.consultantService
          .createConsultant(result)
          .subscribe(consultant => {
            this.router.navigate([`consultants/${consultant._id}`]);
          });
      }
    });
  }
}
