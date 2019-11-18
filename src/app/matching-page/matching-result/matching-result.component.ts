import { Component, OnInit } from "@angular/core";
import { PmsmpResult } from "../../models/pmsmp-result";
import { PmsmpService } from "../../services/pmsmp.service";

@Component({
  selector: "app-matching-result",
  templateUrl: "./matching-result.component.html",
  styleUrls: ["./matching-result.component.scss"]
})
export class MatchingResultComponent implements OnInit {
  pmsmpList: PmsmpResult[];

  constructor(private pmsmpService: PmsmpService) {}

  ngOnInit() {
    this.loadPmsmpList();
  }

  private loadPmsmpList() {
    this.pmsmpService.getPmsmpList().subscribe(
      pmsmpListFound => {
        this.pmsmpList = pmsmpListFound;

        console.log(">>>>>>>>>>>   ", this.pmsmpList);
      },
      err => {},
      () => {
      }
    );
  }
}
