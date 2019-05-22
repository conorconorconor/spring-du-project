import { Component, OnInit } from "@angular/core";
import { ConsultantService } from "../consultant.service";
import { Consultant } from "../consultant";
import { Router } from "@angular/router";

@Component({
  selector: "app-consultant-create",
  templateUrl: "./consultant-create.component.html",
  styleUrls: ["../../shared/styles/consultant-create.scss"]
})
export class ConsultantCreateComponent implements OnInit {
  public consultant: Consultant = new Consultant();

  constructor(
    private consultantService: ConsultantService,
    private router: Router
  ) {}

  ngOnInit() {}

  public createConsultant(): void {
    this.consultantService
      .createConsultant(this.consultant)
      .subscribe(consultant => {
        this.router.navigate([`consultants/${consultant._id}`]);
      });
  }
}
