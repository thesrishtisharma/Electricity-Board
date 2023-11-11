import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/classes/applicant/applicant';
import { RestApiService } from 'src/app/services/rest-api/rest-api.service';

@Component({
  selector: 'app-applicant-update',
  templateUrl: './applicant-update.component.html',
  styleUrls: ['./applicant-update.component.css']
})
export class ApplicantUpdateComponent implements OnInit{
  
  allApplicants: Applicant[] = [];
  selectedApplicant = new Applicant();
  message: string = "Please wait while we load the data";
  selection: boolean = false;

  temp = new Applicant();

  constructor(
    private restApi: RestApiService
  ){}
  
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.restApi.allApplicants().subscribe(
      data => {
        this.allApplicants = data;
        this.message = "";
      },
      error => {
        window.alert("An error occurred !!");
      }
    );
  }

  loadApplicant(id: any){
    this.restApi.applicantById(id.value).subscribe(
      data => {
        this.selectedApplicant = data;
        this.temp = data;
        this.selection = true;
      },
      error => {
        this.selection = false;
        window.alert("An error occurred !!");
      }
    );
  }

  submitModification(){
    this.restApi.modifyConnectionRequest(this.temp).subscribe(
      data => {
        window.alert("Modification Success");
        window.location.reload();
      },
      error => {
        window.alert("An Error Occurred.");
      }
    );
  }
}
