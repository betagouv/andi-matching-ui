import { Component, OnInit } from "@angular/core";
import { PmsmpService } from "src/app/services/pmsmp.service";
import { Address, ADDRESS_TYPE } from "src/app/models/pmsmp-request";

@Component({
  selector: "app-matching-form",
  templateUrl: "./matching-form.component.html",
  styleUrls: ["./matching-form.component.scss"]
})
export class MatchingFormComponent implements OnInit {
  constructor(private pmsmpService: PmsmpService) {}

  ngOnInit() {}

  loadPmsmpList(userRequest) {
    this.pmsmpService
      .getPmsmpList(new Address(ADDRESS_TYPE.string, userRequest.adress), [])
      .subscribe(pmsmpListFound => {
        console.log("++++ ", pmsmpListFound)
        console.log("++++ ", this.pmsmpService.pmsmpResult)
        this.pmsmpService.pmsmpResult = pmsmpListFound;
      });
  }
}
