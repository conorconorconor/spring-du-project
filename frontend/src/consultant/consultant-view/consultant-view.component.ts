import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Consultant } from "../consultant";
import { ConsultantService } from "../consultant.service";
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from '@angular/material';
import { CommentComponent } from '../comment/comment.component';
import { ConsultantComment } from '../comment';

@Component({
  selector: "app-consultant-view",
  templateUrl: "./consultant-view.component.html",

  styleUrls: ["../../shared/styles/consultant.scss"]
})
export class ConsultantViewComponent implements OnInit {
  public consultant$: Observable<Consultant>;
  public comment: ConsultantComment;
  private id: string = this.route.snapshot.paramMap.get("id");

  constructor(
    private route: ActivatedRoute,
    private consultantService: ConsultantService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.consultant$ = this.consultantService.getConsultantById(this.id);
  }

  addComment(): void {
    let dialog = this.dialog.open(CommentComponent, {
      width: "1000px",
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result.text)
      this.consultantService.addComment(this.id, result)
    })

  }
}
