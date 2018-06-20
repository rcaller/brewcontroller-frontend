import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-goswitch',
  templateUrl: './goswitch.component.html',
  styleUrls: ['./goswitch.component.css']
})
export class GoswitchComponent implements OnInit {
  public goSwitchColor:string = "accent";
  public goSwitchChecked:boolean = false;
  public pollingInterval:any;
  constructor(private http:Http) {
    this.pollingInterval = Observable.interval(10000);
    this.pollingInterval.subscribe(x =>
        this.getRunStatus()
    );
  }

  ngOnInit() {
    this.getRunStatus();
  }

  getRunStatus() {
    this.http.get('http://'+window.location.hostname+':8080/running').subscribe(data => {
      let jsonData=data.json();
      this.goSwitchChecked = jsonData["running"];
  });
}

  runToggle() {
    console.log("Toggle " + this.goSwitchChecked);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post('http://localhost:8080/running', {"running": this.goSwitchChecked}).subscribe(data => {
      let jsonData=data.json();
      this.goSwitchChecked = jsonData["running"];
    });
  }

}
