import { Component, OnInit } from "@angular/core";
import { PmsmpService } from "../services/pmsmp.service";
import { UUID } from "angular2-uuid";

@Component({
  selector: "app-matching-page",
  templateUrl: "./matching-page.component.html",
  styleUrls: ["./matching-page.component.scss"]
})
export class MatchingPageComponent implements OnInit {
  constructor(private pmsmpService: PmsmpService) {}

  ngOnInit() {
    this.pmsmpService._session_id = UUID.UUID();
  }
}
