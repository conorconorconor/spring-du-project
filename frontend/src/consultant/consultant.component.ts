import { Component, OnInit } from "@angular/core";
import { ConsultantService } from "./consultant.service";
import { Consultant } from "./consultant";

@Component({
  selector: "app-consultant",
  templateUrl: "./consultant.component.html",
  styleUrls: ["../shared/styles/user.scss"]
})
export class ConsultantComponent implements OnInit {
  consultants: Consultant[];

  constructor(private consultantService: ConsultantService) {}

  ngOnInit() {
    this.getConsultants();
  }

  getConsultants(): void {
    this.consultantService
      .getConsultants()
      .subscribe(consultants => (this.consultants = consultants));
  }
}
