import { Component, OnInit } from "@angular/core";
import { PmsmpService } from "src/app/services/pmsmp.service";

@Component({
  selector: "app-matching-form",
  templateUrl: "./matching-form.component.html",
  styleUrls: ["./matching-form.component.scss"]
})
export class MatchingFormComponent implements OnInit {
  constructor(private pmsmpService: PmsmpService) {}

  ngOnInit() {}

  /* private loadPmsmpList() {
    this.pmsmpService
      .getPmsmpList(address, criteria)
      .subscribe(pmsmpListFound => {
        this.pmsmpService.pmsmpResult = pmsmpListFound;
      });
  } */
}
