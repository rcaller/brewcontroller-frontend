import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.css']
})
export class GaugesComponent implements OnInit {

  @Input()
  thermo:string = "";
  constructor() { }

  ngOnInit() {
    console.log(this.thermo);
    this.doughnutChartData = this.thermoData[this.thermo];
    this.doughnutChartLabels = [this.thermo];
  }
  public thermoData:any = {
    beer: [75, 25],
    flow: [50,50]
  };
  public doughnutChartLabels:string[] = [];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartOptions:any = {
    circumference: Math.PI,
    rotation: -Math.PI,
    cutoutPercentage: 75,
  }; 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


}
