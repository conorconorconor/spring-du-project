import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ConsultantComponent } from 'src/consultant/consultant.component';
import { ConsultantModule } from 'src/consultant/consultant.module';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ConsultantModule
  ]
})
export class UserModule { }
