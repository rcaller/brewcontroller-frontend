import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  public lineChartOptions:any = {};
  public lineChartColors:Array<any> = [];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'scatter';
  public lineChartData:Array<any>=[];

  constructor(
    private http:Http
  ) { };

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

    this.lineChartData=[
      {data: [], label: 'target'},
      {data: [], label: 'flow'},
      {data: [], label: 'herms'},
      {data: [], label: 'mash'}
    ];
    this.getData();
  }

  private getData():void {
    this.http.get('https://s3-eu-west-1.amazonaws.com/tertiary-test-json-bucket/graph.json').subscribe(data => {
      let graphData=data.json();
      console.log(graphData);
      let tempData:Array<any>=new Array();
      for (var line in graphData) {
        let dataArray:Array<any> = new Array();
          for (var point of graphData[line]) {

            let newPoint = {"x": Date.parse(point[0]), "y": point[1]};
            dataArray.push(newPoint);
          }
        let localData = {data: dataArray, label: line}

        tempData.push(localData);
      }

      this.lineChartData=tempData;
      console.log(this.lineChartData);
    });
  }


  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
