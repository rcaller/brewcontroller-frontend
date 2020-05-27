import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-hlt',
  templateUrl: './hlt.component.html',
  styleUrls: ['./hlt.component.css']
})
export class HltComponent implements OnInit {
  public lineChartOptions: any = {};
  public lineChartColors: Array<any> = [];
  public lineChartLegend = true;
  public lineChartType = 'scatter';
  public lineChartData: Array<any> = [];
  public pollingInterval: any;

  constructor(
    private http: HttpClient
  ) {
    this.pollingInterval = interval(5000);
    this.pollingInterval.subscribe(x =>
      this.update()
    );
  }

  ngOnInit() {
    this.lineChartOptions = {
      responsive: true,
      scales: {
        xAxes: [{

                type: 'time',
                time: {
                    unit: 'minute'
                }
        }],
        yAxes: [{
          id: 'temp',
          type: 'linear'
        }]
      }
    };
    this.lineChartColors = [
    { // grey
      showLine: 'true',
      fill: 'false',
      lineTension: 0,
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      showLine: 'true',
      fill: 'false',
      borderColor: 'rgba(177,59,96,1)',
      pointRadius: 0
    },
    {
      showLine: 'true',
      fill: 'false',
      borderColor: 'rgba(148,59,177,1)',
      pointRadius: 0
    },
    {
      showLine: 'true',
      fill: 'false',
      borderColor: 'rgba(53,177,177,1)',
      pointRadius: 0
    }
  ];

    this.lineChartData = [
      {data: [], label: 'target'},
      {data: [], label: 'hlt'}
    ];
    this.update();
  }

  private update(): void {
    this.http.get('http://' + window.location.hostname + ':8080/hltdata', {responseType: 'json'}).subscribe(data => {
      const graphData = data;
      //console.log(graphData);
      const tempData: Array<any> = new Array();
      for (const line in graphData) {
        const dataArray: Array<any> = new Array();
          for (const point of graphData[line]) {

            const newPoint = {'x': Date.parse(point['timeStamp']), 'y': point['temperature']};
            dataArray.push(newPoint);
          }
        const localData = {data: dataArray, label: line};

        tempData.push(localData);
      }

      this.lineChartData = tempData;
      //console.log(this.lineChartData);
    });
  }


  // events
  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }

}
