import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Applicant } from 'src/app/classes/applicant/applicant';
import { RestApiService } from 'src/app/services/rest-api/rest-api.service';

@Component({
  selector: 'app-applicant-by-id',
  templateUrl: './applicant-by-id.component.html',
  styleUrls: ['./applicant-by-id.component.css']
})
export class ApplicantByIdComponent {

  numberFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?\d+$/), // Pattern for integers
  ]);

  constructor(
    private router: Router,
    private restApiService: RestApiService
  ){}

  goto(page: string){
    this.router.navigate([page]);
  }

  applicant = new Applicant();
  exist: boolean = false;

  find(id: any){
    id = id.value;
    this.restApiService.applicantById(id).subscribe(
      data => {
        this.applicant = data;
        this.exist = true;
      },
      error => {
        this.exist = false;
        if(error.status == 404){
          window.alert("Invalid ID");
        }
        else{
          window.alert("An error occurredd");
        }
      }
    ); 
  }

  matcher = new MyIntegerErrorMatcher();
}

export class MyIntegerErrorMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && (control.invalid || control.hasError('integer')) && (control.dirty || control.touched || isSubmitted));
  }
}
