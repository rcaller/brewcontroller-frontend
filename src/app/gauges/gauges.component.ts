import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.css']
})
export class GaugesComponent implements OnInit {

  @Input()
  thermo:string = "";
  public pollingInterval:any;
  public thermoData:any = {};
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartLabels:string[]=[];
  public doughnutChartColors:any= [
     { backgroundColor: ['rgba(168,17,17,1)', 'rgba(200,200,200,1)'] },
  ];
  public doughnutChartOptions:any = {
    circumference: Math.PI,
    rotation: -Math.PI,
    cutoutPercentage: 75,
    backgroundColor: [ 'rgba(168,17,17,1)', 'rgba(186,186,186,1)']
  };

  constructor(
    private http:Http
  ) {
    this.pollingInterval = Observable.interval(5000);
    this.pollingInterval.subscribe(x =>
        this.update()
    );
  }

  ngOnInit() {
    this.update();

  }

  update() {
   this.http.get('http://localhost:8080/current').subscribe(data => {
        for (var thm in data.json()) {
        var localTemp = data.json()[thm];
        this.thermoData[thm]=[localTemp, 100-localTemp];
      }
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
