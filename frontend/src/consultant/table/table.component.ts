import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Consultant } from "../consultant";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["../../shared/styles/consultant.component.scss"]
})
export class TableComponent implements OnInit {
  @Input() consultants: Consultant[];
  @Input() tableHeaders: string[];
  @Input() showAll: boolean;
  @Output() consultantId = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public goToConsultant(consultant: Consultant) {
    this.consultantId.emit(consultant._id);
  }
}
