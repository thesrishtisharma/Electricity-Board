import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ConnectionRequest } from 'src/app/classes/connection-request/connection-request';
import { RestApiService } from 'src/app/services/rest-api/rest-api.service';

@Component({
  selector: 'app-monthly-connections',
  templateUrl: './monthly-connections.component.html',
  styleUrls: ['./monthly-connections.component.css']
})
export class MonthlyConnectionsComponent implements OnInit {
  
  view: [number, number] = [700, 400];
  colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'myScheme',
    selectable: false,
    group: ScaleType.Time
  };
  gradient = false;
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  showYAxisLabel = true;
  yAxisLabel = 'Count';

  requests: ConnectionRequest[] = [];

  constructor(
    private restApi: RestApiService
  ){}

  ngOnInit() {
    this.restApi.monthlyConnectionRequests().subscribe(
      data => {
        this.requests = data;
        console.log(data);
      },
      error => {
        window.alert("An error occurred !!");
      }
    );
  }
}
