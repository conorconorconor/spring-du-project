import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConsultantRoutingModule } from "./consultant-routing.module";
import { MatTableModule } from "@angular/material";
import { ConsultantComponent } from "./consultant.component";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ConsultantViewComponent } from "./consultant-view/consultant-view.component";

@NgModule({
  declarations: [ConsultantComponent, ConsultantViewComponent],
  imports: [
    CommonModule,
    ConsultantRoutingModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule
  ]
})
export class ConsultantModule {}
