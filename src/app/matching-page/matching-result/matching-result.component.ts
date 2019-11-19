import { Component, OnInit } from "@angular/core";
import { PmsmpResult } from "../../models/pmsmp-result";
import { PmsmpService } from "../../services/pmsmp.service";

@Component({
  selector: "app-matching-result",
  templateUrl: "./matching-result.component.html",
  styleUrls: ["./matching-result.component.scss"]
})
export class MatchingResultComponent implements OnInit {
  pmsmpResult: PmsmpResult;

  constructor(private pmsmpService: PmsmpService) {}

  ngOnInit() {
    this.pmsmpResult = this.pmsmpService.pmsmpResult;
  }
}
