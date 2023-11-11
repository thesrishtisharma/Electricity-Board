import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './components/explore/explore.component';
import { AboutComponent } from './components/about/about.component';
import { AllApplicantsComponent } from './components/all-applicants/all-applicants.component';
import { ApplicantByIdComponent } from './components/applicant-by-id/applicant-by-id.component';
import { ApplicantDateFilterComponent } from './components/applicant-date-filter/applicant-date-filter.component';
import { ApplicantUpdateComponent } from './components/applicant-update/applicant-update.component';
import { MonthlyConnectionsComponent } from './components/monthly-connections/monthly-connections.component';

const routes: Routes = [
  {path: "monthly-connections", component: MonthlyConnectionsComponent},
  {path: "explore", component: ExploreComponent},
  {path: "", component: AboutComponent},
  {path: "about-us", component: AboutComponent},
  {path: "all-applicants", component: AllApplicantsComponent},
  {path: "search/applicant", component: ApplicantByIdComponent},
  {path: "search/applicants", component: ApplicantDateFilterComponent},
  {path: "modify-applicant", component: ApplicantUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
