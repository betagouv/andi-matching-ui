import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PmsmpResult } from '../models/pmsmp-result';
import * as moment from "moment";
import { UUID } from "angular2-uuid";
import { PmsmpRequest, Criteria, Address } from "../models/pmsmp-request";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PmsmpService {

  _session_id: string;
  pmsmpResult: Subject<PmsmpResult>;

  constructor(private http: HttpClient) {
    this.pmsmpResult = new Subject<PmsmpResult>();
  }

  private computeRequestBody(
    address: Address,
    criteria: Criteria[]
  ) {
    return new PmsmpRequest(
      moment().toISOString(),
      UUID.UUID(),
      this._session_id,
      address,
      criteria
    );
  }

  getPmsmpList(address: Address, criteria: Criteria[]) {
    return this.http.post<PmsmpResult>(
      "https://andi.beta.gouv.fr/api/match",
      this.computeRequestBody( address, criteria)
    );
  }
}
