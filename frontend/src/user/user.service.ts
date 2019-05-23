import { Injectable } from "@angular/core";
import { AuthService } from "src/services/auth.service";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Observable } from "rxjs";
import { Consultant } from "src/consultant/consultant";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private user: User | null;

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.user = this.authService.getUserFromLocalStorage();
  }

  public getConsultants(): Observable<Consultant[]> {
    if (this.user) {
      return this.http.get<Consultant[]>(
        `/api/users/${this.user._id}?getConsultants=true`
      );
    }
  }

  public getUser(): Observable<User> {
    if (this.user) {
      return this.http.get<User>(`/api/users/${this.user._id}`);
    }
  }

  public addConsultant(consultantId: string): Observable<User> {
    if (this.user) {
      return this.http.put<User>(
        `/api/users/add/${this.user._id}?consultantId=${consultantId}`,
        {}
      );
    }
  }

  public removeConsultant(consultantId: string): Observable<User> {
    if (this.user) {
      return this.http.put<User>(
        `/api/users/remove/${this.user._id}?consultantId=${consultantId}`,
        {}
      );
    }
  }
}
