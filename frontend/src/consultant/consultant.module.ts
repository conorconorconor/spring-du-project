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
  MatDialogModule,
  MatListModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";
import { ConsultantComponent } from "./consultant.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ConsultantViewComponent } from "./consultant-view/consultant-view.component";
import { ConsultantCreateComponent } from "./consultant-create/consultant-create.component";
import { CommentComponent } from "./comment/comment.component";
import { DeleteComponent } from "./delete/delete.component";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { ConsultantTableComponent } from "./consultant-table/consultant-table.component";


@NgModule({
  declarations: [
    ConsultantComponent,
    ConsultantViewComponent,
    ConsultantCreateComponent,
    DeleteComponent,
    CommentComponent,
    ConsultantTableComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
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
    MatListModule,
    ScrollDispatchModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [
    CommentComponent,
    DeleteComponent,
    ConsultantCreateComponent
  ],
  exports: [ConsultantComponent]
})
export class ConsultantModule {}
