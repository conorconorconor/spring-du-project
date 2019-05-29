import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Consultant } from "../consultant";
import { ConsultantService } from "../consultant.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { CommentComponent } from "../comment/comment.component";
import { ConsultantComment } from "../comment";
import { DeleteComponent } from "../delete/delete.component";
import { UserService } from "src/user/user.service";
import { AuthService } from "src/services/auth.service";

@Component({
  selector: "app-consultant-view",
  templateUrl: "./consultant-view.component.html",
  styleUrls: ["../../shared/styles/comment.scss"]
})
export class ConsultantViewComponent implements OnInit {
  public consultant: Consultant;
  private id: string = this.route.snapshot.paramMap.get("id");
  private tmId: string = "none";
  public delete: boolean = false;
  public userSub: Subscription;
  public onTeam: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private consultantService: ConsultantService,
    public dialog: MatDialog,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.updateConsultant();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.userSub && this.userSub.unsubscribe();
  }

  updateConsultant() {
    this.consultantService.getConsultantById(this.id).subscribe(result => {
      this.consultant = result;
      console.log(this.consultant.teamManager);
      if (this.consultant.teamManager) {
        this.tmId = this.consultant.teamManager._id;
      }
      this.authService.getUser().subscribe(user => {
        if (this.tmId === user._id) {
          this.onTeam = true;
        }
        console.log(this.onTeam);
        console.log(this.tmId);
      });
    });
  }

  deleteConsultant(id: string): void {
    let dialog = this.dialog.open(DeleteComponent);
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.consultantService.deleteConsultant(id).subscribe();
        this.router.navigate(["/consultants"]);
      }
    });
  }

  removeFromTeam(consultant: Consultant) {
    this.userService.removeConsultant(consultant).subscribe(result => {
      this.router.navigate(["user"]);
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
