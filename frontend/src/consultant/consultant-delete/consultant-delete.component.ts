import { Component, OnInit } from "@angular/core";
import { ConsultantService } from "../consultant.service";
import { Router } from "@angular/router";
import { Consultant } from "../consultant";

@Component({
  selector: "app-consultant-delete",
  templateUrl: "./consultant-delete.component.html",
  styleUrls: ["../../shared/styles/consultant-delete.scss"]
})
export class ConsultantDeleteComponent implements OnInit {
  public consultant: Consultant = new Consultant();

  constructor(
    private consultantService: ConsultantService,
    private router: Router
  ) {}

  ngOnInit() {}

  public deleteConsultant(): void {
    this.consultantService.deleteConsultant(this.consultant._id).subscribe();
  }
}
