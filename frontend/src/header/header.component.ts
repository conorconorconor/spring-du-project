import { Component } from "@angular/core";
import { AuthService } from "src/services/auth.service";
import { Observable } from 'rxjs';
import { User } from 'src/user/user';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["../shared/styles/header.scss"]
})
export class HeaderComponent {
  public user$: Observable<User>;

  constructor(private authService: AuthService) {}

  public async logout() {
    await this.authService.logout();
  }

  public checkLogin() {
    if (this.authService.getUserFromLocalStorage()) return true;
    else return false;
  }

  ngOnInit() {
    this.user$= this.authService.getUser();
  }
}
