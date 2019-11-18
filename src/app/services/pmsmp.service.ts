import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PmsmpResult } from "../models/pmsmp-result";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PmsmpService {
  constructor(private http: HttpClient) {}

  getPmsmpList() {
    return this.http.get<PmsmpResult[]>("../../assets/mocks/search01-mock.json");
  }
}
