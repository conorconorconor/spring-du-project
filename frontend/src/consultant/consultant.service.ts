import { Injectable } from "@angular/core";
import { Consultant } from "./consultant";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConsultantService {
  consultant: any;
  constructor(private http: HttpClient) {}

  getConsultants(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>("/api/consultants");
  }

  getConsultantById(id: string) {
    return this.http.get<Consultant>("/api/consultants/" + id);
  }
  createConsultant(consultant: Consultant) {
    return this.http.post<Consultant>("/api/consultants", consultant);
  }

  deleteConsultant(id: string): Observable<{}> {
    return this.http.delete("/api/consultants/" + id);
  }
}
