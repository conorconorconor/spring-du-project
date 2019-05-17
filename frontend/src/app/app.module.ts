import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { ConsultantComponent } from "../consultant/consultant.component";
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { AppRouting } from "./app.routing";
import { ConsultantModule } from "../consultant/consultant.module";
import { HomeModule } from "../home/home.module";
import { GanonModule } from "../ganon/ganon.module";

@NgModule({
  declarations: [AppComponent, ConsultantComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FooterModule,
    HeaderModule,
    AppRouting,
    ConsultantModule,
    GanonModule,
    FlexLayoutModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
