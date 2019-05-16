import { Injectable } from "@angular/core";
import { Consultant } from "./consultant";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConsultantService {
  constructor(private http: HttpClient) {}

  getConsultants(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>("/api/consultants");
  }
}
