import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-goswitch',
  templateUrl: './goswitch.component.html',
  styleUrls: ['./goswitch.component.css']
})
export class GoswitchComponent implements OnInit {
  public goSwitchColor = 'accent';
  public goSwitchChecked = false;
  public pollingInterval: any;
  constructor(private http: HttpClient) {
    this.pollingInterval = interval(10000);
    this.pollingInterval.subscribe(x =>
        this.getRunStatus()
    );
  }

  ngOnInit() {
    this.getRunStatus();
  }

  getRunStatus() {
    this.http.get('http://' + window.location.hostname + ':8080/running', {responseType: 'json'}).subscribe(data => {
      const jsonData = data;
      this.goSwitchChecked = jsonData['running'];
  });
}

  runToggle() {
    console.log('Toggle ' + this.goSwitchChecked);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post('http://localhost:8080/running', {'running': this.goSwitchChecked}, {responseType: 'json'}).subscribe(data => {
      const jsonData = data;
      this.goSwitchChecked = jsonData['running'];
    });
  }

}
