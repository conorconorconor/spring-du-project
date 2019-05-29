import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user.component";
import { UserCreateComponent } from "./user-create/user-create.component";
import {
  MatRadioModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatListModule,
  MatIconModule,
  MatPaginatorModule
} from "@angular/material";
import { ConsultantRoutingModule } from "src/consultant/consultant-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [UserComponent, UserCreateComponent],
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
    MatListModule,
    ScrollDispatchModule,
    MatIconModule,
    FlexLayoutModule,
    MatPaginatorModule,
    UserRoutingModule
  ],
  exports: [UserCreateComponent]
})
export class UserModule {}
