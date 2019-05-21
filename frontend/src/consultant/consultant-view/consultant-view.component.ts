import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Consultant } from "../consultant";
import { ConsultantService } from "../consultant.service";
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material";
import { CommentComponent } from "../comment/comment.component";
import { ConsultantComment } from "../comment";

@Component({
  selector: "app-consultant-view",
  templateUrl: "./consultant-view.component.html",

  styleUrls: ["../../shared/styles/consultant.scss"]
})
export class ConsultantViewComponent implements OnInit {
  public consultant$: Observable<Consultant>;
  private id: string = this.route.snapshot.paramMap.get("id");

  constructor(
    private route: ActivatedRoute,
    private consultantService: ConsultantService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.updateConsultant();
  }

  ngOnChanges() {
    this.updateConsultant();
  }

  updateConsultant() {
    this.consultant$ = this.consultantService.getConsultantById(this.id);
  }

  addComment(): void {
    let dialog = this.dialog.open(CommentComponent, {
      width: "500px"
    });
    dialog.afterClosed().subscribe((result: ConsultantComment) => {
      console.log(result);
      this.consultant$ = this.consultantService.addComment(this.id, result);
    });
  }
}
