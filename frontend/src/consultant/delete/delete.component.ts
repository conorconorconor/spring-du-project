import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["../../shared/styles/delete.scss"]
})
export class DeleteComponent implements OnInit {
  public delete: boolean = false;

  constructor(public dialogRef: MatDialogRef<DeleteComponent>) {}

  verifyDelete() {
    this.delete = !this.delete;
    this.dialogRef.close(this.delete);
  }
  ngOnInit() {}
}
