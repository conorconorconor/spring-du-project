import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Consultant } from "../consultant";
import { ConsultantService } from "../consultant.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-consultant-view",
  templateUrl: "./consultant-view.component.html",
  styleUrls: ["../../shared/styles/consultant-view.scss"]
})
export class ConsultantViewComponent implements OnInit {
  public consultant$: Observable<Consultant>;

  constructor(
    private route: ActivatedRoute,
    private consultantService: ConsultantService
  ) {}

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get("id");
    this.consultant$ = this.consultantService.getConsultantById(id);
  }
}
