import { Component, OnInit } from "@angular/core";
import { ConsultantService } from "../consultant.service";
import { Consultant } from "../consultant";
import { Router } from "@angular/router";
import { MatDialogRef, MatDialog } from "@angular/material";

@Component({
  selector: "app-consultant-create",
  templateUrl: "./consultant-create.component.html",
  styleUrls: ["../../shared/styles/consultant-create.scss"]
})
export class ConsultantCreateComponent implements OnInit {
  public consultant: Consultant = new Consultant();

  constructor(
    private consultantService: ConsultantService,
    private router: Router,
    public dialogRef: MatDialogRef<ConsultantCreateComponent>,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}
}
