import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from 'src/app/classes/applicant/applicant';
import { RestApiService } from 'src/app/services/rest-api/rest-api.service';

@Component({
  selector: 'app-all-applicants',
  templateUrl: './all-applicants.component.html',
  styleUrls: ['./all-applicants.component.css']
})
export class AllApplicantsComponent implements OnInit{

  constructor(
    private router: Router,
    private restApiService: RestApiService
  ){}

  ngOnInit(): void {
    this.fetchAllApplicants();
  }

  goto(page: string){
    this.router.navigate([page]);
  }

  allApplicants: Applicant[] = [];

  fetchAllApplicants(){
    this.restApiService.allApplicants().subscribe(
      data => {
        this.allApplicants = data;
      },
      error => {
        window.alert("An error occurred !!");
      }
    );
  }
}
