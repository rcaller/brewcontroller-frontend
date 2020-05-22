import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.css']
})
export class GaugesComponent implements OnInit {

  @Input()
  thermo = '';
  public pollingInterval: any;
  public thermoData: any = {};
  public doughnutChartData: number[] = [];
  public doughnutChartType = 'doughnut';
  public doughnutChartLabels: string[] = [];
  public doughnutChartColors: any = [
     { backgroundColor: ['rgba(168,17,17,1)', 'rgba(200,200,200,1)'] },
  ];
  public doughnutChartOptions: any = {
    circumference: Math.PI,
    rotation: -Math.PI,
    cutoutPercentage: 75,
    backgroundColor: [ 'rgba(168,17,17,1)', 'rgba(186,186,186,1)']
  };

  constructor(
    private http: HttpClient
  ) {
    this.pollingInterval = interval(3000);
    this.pollingInterval.subscribe(x =>
        this.update()
    );
  }

  ngOnInit() {
    this.update();

  }

  update() {
   this.http.get( 'http://' + window.location.hostname + ':8080/current', {responseType: 'json'}).subscribe(data => {
        for (let thm in data) {
        let localTemp = data[thm];
        this.thermoData[thm] = [localTemp, 100 - localTemp];
      }
      this.doughnutChartData = this.thermoData[this.thermo];
    });


  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
