import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Consultant } from "../consultant";
import { ConsultantService } from "../consultant.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { CommentComponent } from "../comment/comment.component";
import { ConsultantComment } from "../comment";
import { DeleteComponent } from "../delete/delete.component";

@Component({
  selector: "app-consultant-view",
  templateUrl: "./consultant-view.component.html",
  styleUrls: ["../../shared/styles/comment.scss"]
})
export class ConsultantViewComponent implements OnInit {
  public consultant: Consultant;
  private id: string = this.route.snapshot.paramMap.get("id");
  public delete: boolean = false;

  constructor(
    private router: Router,
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
    this.consultantService.getConsultantById(this.id).subscribe(result => {
      this.consultant = result;
    });
  }

  deleteConsultant(id: string): void {
    let dialog = this.dialog.open(DeleteComponent);
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.consultantService.deleteConsultant(id).subscribe();
        this.router.navigate(["/consultants"]);
      }
    });
  }

  addComment(): void {
    let dialog = this.dialog.open(CommentComponent, {
      width: "500px",
      height: "400px"
    });
    dialog.afterClosed().subscribe((result: ConsultantComment) => {
      if (result.text) {
        this.consultantService.addComment(this.id, result).subscribe(result => {
          this.consultant = result;
        });
      }
    });
  }
}
