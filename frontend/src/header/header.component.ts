import { Component } from "@angular/core";
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["../shared/styles/header.scss"]
})
export class HeaderComponent {
  constructor(private authService: AuthService) {

  }

  public logout() {
    this.authService.logout();
  }
}
