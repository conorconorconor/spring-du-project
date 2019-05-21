import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConsultantRoutingModule } from "./consultant-routing.module";
import { MatTableModule, MatCardModule, MatProgressSpinnerModule, MatButtonModule, MatInputModule, MatRadioModule } from "@angular/material";
import { ConsultantComponent } from "./consultant.component";
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ConsultantViewComponent } from "./consultant-view/consultant-view.component";
import { ConsultantCreateComponent } from "./consultant-create/consultant-create.component";
import { ConsultantEditComponent } from './consultant-edit/consultant-edit.component';

@NgModule({
  declarations: [
    ConsultantComponent,
    ConsultantViewComponent,
    ConsultantCreateComponent,
    ConsultantEditComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ConsultantRoutingModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class ConsultantModule {}
