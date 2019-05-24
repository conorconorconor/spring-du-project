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

  constructor(private http: HttpClient) {}

  ngOnInit() { }

  public getConsultants(user: User): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(
      `/api/users/${user._id}?getConsultants=true`
    );
  }

  public getUser(): Observable<User> {
    return this.http.get<User>(`/api/users/${this.user._id}`);
  }

  public addConsultant(user: User, consultantId: string): Observable<User> {
    return this.http.put<User>(
      `/api/users/add/${user._id}?consultantId=${consultantId}`,
      {}
    );
  }

  public removeConsultant(user: User, consultantId: string): Observable<User> {
    return this.http.put<User>(
      `/api/users/remove/${user._id}?consultantId=${consultantId}`,
      {}
    );
  }

  createUser(user: User) {
    return this.http.post<User>("/api/users", user);
  }
}
