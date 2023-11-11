import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {NgxChartsModule} from '@swimlane/ngx-charts';

import { AboutComponent } from './components/about/about.component';
import { ExploreComponent } from './components/explore/explore.component';
import { AllApplicantsComponent } from './components/all-applicants/all-applicants.component';
import { ApplicantByIdComponent } from './components/applicant-by-id/applicant-by-id.component';
import { ApplicantDateFilterComponent } from './components/applicant-date-filter/applicant-date-filter.component';
import { ApplicantUpdateComponent } from './components/applicant-update/applicant-update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonthlyConnectionsComponent } from './components/monthly-connections/monthly-connections.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ExploreComponent,
    AllApplicantsComponent,
    ApplicantByIdComponent,
    ApplicantDateFilterComponent,
    ApplicantUpdateComponent,
    MonthlyConnectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
