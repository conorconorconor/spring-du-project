import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, ReplaySubject } from "rxjs";
import { User } from "../user/user";
import { LocalStorageService } from "./localStorage.service";
import { Credentials } from "src/app/models/credentials";

@Injectable()
export class AuthService {
  private userSubject = new ReplaySubject<User>();
  public redirectUrl: string;

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient,
    private router: Router
  ) {
    this.init();
  }

  private init(): void {
    const user: User | null = this.getUserFromLocalStorage();

    if (user !== null) {
      this.userSubject.next(user);
    }
  }

  public async login(credentials: Credentials): Promise<void> {
    if (credentials.username && credentials.password) {
      try {
        const loggedInUser: User = await this.http
          .post<User>("/api/users/login", credentials)
          .toPromise();
        this.userSubject.next(loggedInUser);
        console.log(loggedInUser);
        this.localStorageService.setItem("user", JSON.stringify(loggedInUser));
      } catch (e) {
        return Promise.reject(e.error._errors[0]);
      }
    } else {
      return Promise.reject("Invalid username or password.");
    }
  }

  public async logout(): Promise<void> {
    try {
      this.localStorageService.removeItem("user");
      this.userSubject.next(undefined);
      this.router.navigate([""]);
    } catch (error) {
      return Promise.reject("Failed to logout user");
    }
  }

  public getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  public getUserFromLocalStorage(): User | null {
    const userJsonStr: string | null = this.localStorageService.getItem("user");

    if (userJsonStr) {
      return JSON.parse(userJsonStr);
    }

    return null;
  }
}
