import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { enviroment } from "../../enviroments/enviroment";
import { IAssistant } from "./interfaces/assistant.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AssistantsService {
  constructor(private readonly http: HttpClient) {}

  getAssistants(): Observable<IAssistant[]> {
    return this.http.get<IAssistant[]>(`${enviroment.apiUrl}/projects`);
  }
}
