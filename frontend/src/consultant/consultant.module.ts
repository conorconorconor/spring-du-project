import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConsultantRoutingModule } from "./consultant-routing.module";
import {
  MatTableModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatExpansionPanel,
  MatDialog,
  MatDialogModule, MatPaginatorModule, MatSortModule
} from "@angular/material";
import { ConsultantComponent } from "./consultant.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ConsultantViewComponent } from "./consultant-view/consultant-view.component";
import { ConsultantCreateComponent } from "./consultant-create/consultant-create.component";
import { ConsultantEditComponent } from "./consultant-edit/consultant-edit.component";
import { CommentComponent } from "./comment/comment.component";
import { DeleteComponent } from "./delete/delete.component";
import { ConsultantTableComponent } from './consultant-table/consultant-table.component';

@NgModule({
  declarations: [
    ConsultantComponent,
    ConsultantViewComponent,
    ConsultantCreateComponent,
    ConsultantEditComponent,
    DeleteComponent,
    CommentComponent,
    ConsultantTableComponent
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
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [
    CommentComponent,
    DeleteComponent,
    ConsultantCreateComponent
  ]
})
export class ConsultantModule {}
