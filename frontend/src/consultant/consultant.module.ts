import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantRoutingModule } from './consultant-routing.module';
import { MatTableModule } from '@angular/material';
import { ConsultantComponent } from './consultant.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    ConsultantComponent
  ],
  imports: [
    CommonModule,
    ConsultantRoutingModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule
  ]
})
export class ConsultantModule { }
