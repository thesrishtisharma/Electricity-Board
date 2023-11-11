import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  availableOptions = [
    {id: 1, option: "View All Applicants", action: "all"},
    {id: 2, option: "Fetch Applicant By ID", action: "byId"},
    {id: 3, option: "Fetch Applicants between StartDate - EndDate", action: "filter"},
    {id: 4, option: "Modify existing applicant's details", action: "modify"}
  ];

  load(action: string){
    console.log(action)
    switch(action){
      case "all": {
        this.router.navigate(["all-applicants"]);
        break;
      }
      case "byId": {
        this.router.navigate(["search/applicant"]);
        break;
      }
      case "filter": {
        this.router.navigate(["search/applicants"]);
        break;
      }
      case "modify": {
        this.router.navigate(["modify-applicant"]);
        break;
      }
      default:{
        window.alert("An Error Occurred !!");
        break;
      }
    }
  }
}