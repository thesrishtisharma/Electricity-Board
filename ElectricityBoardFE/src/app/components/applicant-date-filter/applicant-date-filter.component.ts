import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from 'src/app/classes/applicant/applicant';
import { RestApiService } from 'src/app/services/rest-api/rest-api.service';

@Component({
  selector: 'app-applicant-date-filter',
  templateUrl: './applicant-date-filter.component.html',
  styleUrls: ['./applicant-date-filter.component.css']
})
export class ApplicantDateFilterComponent {

  allApplicants: Applicant[] = [];
  exist: boolean = false;

  constructor(
    private router: Router,
    private restApi: RestApiService
  ){}

  goto(page: string){
    this.router.navigate([page]);
  }

  applyFilter(startDate: any, endDate: any){
    startDate = startDate.value;
    endDate = endDate.value;
    if(startDate == "" || endDate == ""){
      window.alert("Invalid Date");
    }
    else{
      this.restApi.applicatsByDate(startDate, endDate).subscribe(
        data => {
          this.allApplicants = data;
          if(this.allApplicants.length > 0){
            this.exist = true;
          }
          else{
            this.exist = false;
            window.alert("No records found");
          }
        },
        error => {
          this.exist = false;
          window.alert("An error occurred !!")
        }
      );
    }
    window.alert(startDate.value + "\t" + endDate.value);
  }
}
