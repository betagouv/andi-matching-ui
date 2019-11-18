import { Component, OnInit } from "@angular/core";
import { PmsmpResult } from "../../models/pmsmp-result";
import { PmsmpService } from "../../services/pmsmp.service";

@Component({
  selector: "app-matching-result",
  templateUrl: "./matching-result.component.html",
  styleUrls: ["./matching-result.component.scss"]
})
export class MatchingResultComponent implements OnInit {
  pmsmpList: PmsmpResult;

  constructor() {}

  ngOnInit() {
  }
}
