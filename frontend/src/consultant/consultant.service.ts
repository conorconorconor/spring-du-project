import { Injectable } from "@angular/core";
import { Consultant } from "./consultant";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ConsultantComment } from "./comment";
import { AuthService } from "src/services/auth.service";

@Injectable({
  providedIn: "root"
})
export class ConsultantService {
  consultant: any;
  constructor(private http: HttpClient, private authService: AuthService) {}

  getConsultants(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>("/api/consultants");
  }

  getConsultantById(id: string) {
    return this.http.get<Consultant>("/api/consultants/" + id);
  }
  createConsultant(consultant: Consultant) {
    return this.http.post<Consultant>("/api/consultants", consultant);
  }

  deleteConsultant(id: string): Observable<Consultant> {
    return this.http.delete<Consultant>("/api/consultants/" + id);
  }

  addComment(id: string, comment: ConsultantComment): Observable<Consultant> {
    let user = this.authService.getUserFromLocalStorage();
    comment.author = user.firstName + " " + user.lastName;
    return this.http.post<Consultant>(`/api/consultants/${id}`, comment);
  }
}
