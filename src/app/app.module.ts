import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatchingPageComponent } from "./matching-page/matching-page.component";
import { MatchingFormComponent } from "./matching-page/matching-form/matching-form.component";
import { MatchingHeaderComponent } from "./shared/matching-header/matching-header.component";
import { MatchingResultComponent } from "./matching-page/matching-result/matching-result.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: "matching", component: MatchingPageComponent },
  { path: "", redirectTo: "/matching", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    MatchingPageComponent,
    MatchingFormComponent,
    MatchingHeaderComponent,
    MatchingResultComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MatchingPageComponent]
})
export class AppModule {}
