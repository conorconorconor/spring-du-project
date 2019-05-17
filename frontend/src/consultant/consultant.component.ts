import { Component, OnInit } from "@angular/core";
import { ConsultantService } from "./consultant.service";
import { Consultant } from "./consultant";
import { Observable } from 'rxjs';

@Component({
  selector: "app-consultant",
  templateUrl: "./consultant.component.html",
  styleUrls: ["../shared/styles/user.scss"]
})
export class ConsultantComponent implements OnInit {
  public consultants$: Observable<Consultant[]>;

  constructor(private consultantService: ConsultantService) {}

  ngOnInit() {
    this.getConsultants();
  }

  getConsultants(): void {
    this.consultants$ = this.consultantService.getConsultants();
  }
}
