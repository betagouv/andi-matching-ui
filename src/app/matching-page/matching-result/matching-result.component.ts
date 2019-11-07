import { Component, OnInit } from "@angular/core";
import { PmsmpFound } from "../../models/pmsmp-found";
import { PmsmpService } from "../../services/pmsmp.service";

@Component({
  selector: "app-matching-result",
  templateUrl: "./matching-result.component.html",
  styleUrls: ["./matching-result.component.scss"]
})
export class MatchingResultComponent implements OnInit {
  pmsmpList: PmsmpFound[];

  constructor(private pmsmpService: PmsmpService) {}

  ngOnInit() {
    this.loadPmsmpList();
  }

  private loadPmsmpList() {
    this.pmsmpService.getPmsmpList().subscribe(
      pmsmpListFound => {
        this.pmsmpList = pmsmpListFound;
      },
      err => {},
      () => {
        console.log(">>>>>>>>>>>   ", this.pmsmpList);
      }
    );
  }
}
