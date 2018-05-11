import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // lineChart
  public lineChartData:Array<any> = [
    {data: [{x: 1,y: 1}, {x: 2,y: 23}, {x: 4,y: 42}, {x: 6,y: 7}, {x: 8,y: 13}], label: 'Target'},
    {data: [{x: 1,y: 11}, {x: 2,y: 13}, {x: 4,y: 40}, {x: 7,y: 12}, {x: 9,y: 14}], label: 'Surface'},
    {data: [{x: 1,y: 1.1}, {x: 2,y: 1.3}, {x: 4,y: .40}, {x: 7,y: 1.2}, {x: 9,y: 1.4}], label: 'Gravity', yAxisID: 'grav'},
  ];
  public lineChartOptions:any = {
    responsive: true,
    scales: {
      yAxes: [{
        id: 'temp',
        type: 'linear'
      }, {
        id: 'grav',
        type: 'linear',
        position: 'right',
      }]
    }
  };
  public lineChartColors:Array<any> = [
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
      pointBackgroundColor: 'rgba(148,59,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,59,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'scatter';

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
