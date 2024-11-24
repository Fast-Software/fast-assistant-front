import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { enviroment } from "../enviroments/enviroment";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(auth: {
    email: string;
    password: string;
  }): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(
      `${enviroment.apiUrl}/login`,
      auth
    );
  }

  register(auth: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${enviroment.apiUrl}/register`, auth);
  }

  getAuthToken(): string {
    return localStorage.getItem("token") || "";
  }
}
