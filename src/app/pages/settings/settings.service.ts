import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { enviroment } from "../../enviroments/enviroment";

@Injectable({ providedIn: "root" })
export class SettingsService {
  constructor(private http: HttpClient) {}

  getKeys(): Observable<any> {
    return this.http.get(`${enviroment.apiUrl}/services`);
  }
}
