import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from 'src/app/classes/applicant/applicant';
import { ConnectionRequest } from 'src/app/classes/connection-request/connection-request';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private applicantUrl = "http://localhost:8080/api";
  private connectionsUrl = "http://localhost:8080/connections";

  constructor(
    private http: HttpClient
  ) { }

  allApplicants(): Observable<Applicant[]>{
    return this.http.get<Applicant[]>(this.applicantUrl + "/all-applicants");
  }

  applicantById(id: number): Observable<any>{
    // let queryParams = new HttpParams();
    // queryParams.append("id", id);
    return this.http.get(this.applicantUrl + "/applicant-details?id="+id);
  }

  applicatsByDate(startDate: Date, endDate: Date): Observable<any>{
    // let queryParams = new HttpParams();
    // queryParams.append("startDate", startDate.toString());
    // queryParams.append("endDate", endDate.toString())
    return this.http.get(this.applicantUrl + "/applicants/filter?startDate="+startDate+"&endDate="+endDate);
  }

  modifyConnectionRequest(applicant: Applicant): Observable<any>{
    return this.http.put(this.applicantUrl + "/modify-connection", applicant);
  }

  monthlyConnectionRequests(): Observable<ConnectionRequest[]>{
    return this.http.get<ConnectionRequest[]>(this.connectionsUrl + "/monthly-connection-requests");
  }
}
