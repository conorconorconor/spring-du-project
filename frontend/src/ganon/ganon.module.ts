import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatExpansionModule } from "@angular/material/expansion";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";

import { GanonRoutingModule } from "./ganon-routing.module";
import {
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule
} from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";
import { FormsModule } from "@angular/forms";
import { GanonComponent } from "./ganon.component";

@NgModule({
  declarations: [GanonComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatCardModule,
    GanonRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatOptionModule
  ]
})
export class GanonModule {}
