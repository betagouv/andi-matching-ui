import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PmsmpFound } from "../models/pmsmp-found";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PmsmpService {
  constructor(private http: HttpClient) {}

  getPmsmpList() {
    return this.http.get<PmsmpFound[]>("../../assets/mocks/search01-mock.json");
  }
}
