import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { UserComponent } from "../user/user.component";
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { AppRouting } from "./app.routing";

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FooterModule,
    HeaderModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
