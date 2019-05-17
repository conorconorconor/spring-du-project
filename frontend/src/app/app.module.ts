import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ConsultantComponent } from "../consultant/consultant.component";
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { AppRouting } from "./app.routing";
import { ConsultantModule } from "../consultant/consultant.module";

@NgModule({
  declarations: [AppComponent, ConsultantComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FooterModule,
    HeaderModule,
    AppRouting,
    ConsultantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
