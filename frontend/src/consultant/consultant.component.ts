import { Component, OnInit } from "@angular/core";
import { ConsultantService } from "./consultant.service";
import { Consultant } from "./consultant";
import { Observable } from 'rxjs';

@Component({
  selector: "app-consultant",
  templateUrl: "./consultant.component.html",
  styleUrls: ["./consultant.component.scss"]
})
export class ConsultantComponent implements OnInit {
  public consultants$: Observable<Consultant[]>;
  public tableHeaders: string[] = [
    "last name", 
    "first name"
  ]
  constructor(private consultantService: ConsultantService) {}

  ngOnInit() {
    this.getConsultants();
  }

  getConsultants(): void {
    this.consultants$ = this.consultantService.getConsultants();
  }
}
