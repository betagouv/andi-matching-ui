export class PmsmpRequest {
  readonly _v: number = 1;
  _timestamp: number;
  _query_id: string;
  _session_id: string;
  address: Address;
  criteria: Criteria[];

  constructor(options: {
    _timestamp: number;
    _query_id: string;
    _session_id: string;
    address: Address;
    criteria: Criteria[];
  }) {
    this._timestamp = options._timestamp;
    this._query_id = options._query_id;
    this._session_id = options._session_id;
    this.address = options.address;
    this.criteria = options.criteria;
  }
}

export class Address {
  type: ADDRESS_TYPE.string | ADDRESS_TYPE.geoapigouv;
  value: string;
}

export class Criteria {
  type: CRITERIA_TYPE.distance | CRITERIA_TYPE.rome_codes;
  value: any; // optional
  priority: number;
}

export enum ADDRESS_TYPE {
  string = "string",
  geoapigouv = "geoapigouv"
}

export enum CRITERIA_TYPE {
  distance = "distance",
  rome_codes = "rome_codes"
}
