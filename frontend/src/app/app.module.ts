import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { AppRouting } from "./app.routing";
import { ConsultantModule } from "../consultant/consultant.module";
import { HomeModule } from "../home/home.module";
import { GanonModule } from "../ganon/ganon.module";
import { UserModule } from '../user/user.module';
import { AuthService } from 'src/services/auth.service';
import { LocalStorageService } from 'src/services/localStorage.service';
import { ConsultantComponent } from 'src/consultant/consultant.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FooterModule,
    HeaderModule,
    AppRouting,
    ConsultantModule,
    GanonModule,
    FlexLayoutModule,
    HomeModule,
    UserModule
  ],
  providers: [AuthService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
