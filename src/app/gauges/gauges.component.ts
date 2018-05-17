import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.css']
})
export class GaugesComponent implements OnInit {

  @Input()
  thermo:string = "";
  public thermoData:any = {};
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartLabels:string[]=[];
  public doughnutChartColors:any= [
     { backgroundColor: ['rgba(168,17,17,1)', 'rgba(200,200,200,1)'] },
  ]
  public doughnutChartOptions:any = {
    circumference: Math.PI,
    rotation: -Math.PI,
    cutoutPercentage: 75,
    backgroundColor: [ 'rgba(168,17,17,1)', 'rgba(186,186,186,1)']
  };
  constructor(
    private http:Http
  ) { }

  ngOnInit() {
      this.http.get('https://s3-eu-west-1.amazonaws.com/tertiary-test-json-bucket/gauge.json').subscribe(data => {
        this.thermoData=data.json();
        console.log(this.thermoData[this.thermo]);
        this.doughnutChartData = this.thermoData[this.thermo];
      });
    
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}
