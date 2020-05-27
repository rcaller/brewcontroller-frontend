import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modeswitch',
  templateUrl: './modeswitch.component.html',
  styleUrls: ['./modeswitch.component.css']
})
export class ModeswitchComponent implements OnInit {
  public modeSwitchColor = 'accent';
  public modeSwitchChecked = false;
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
    this.http.get('http://' + window.location.hostname + ':8080/status', {responseType: 'json'}).subscribe(data => {
      const jsonData = data;
      this.modeSwitchChecked = jsonData['running'];
  });
}

  modeToggle() {
    console.log('Toggle ' + this.modeSwitchChecked);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post('http://localhost:8080/running', {'running': this.modeSwitchChecked}, {responseType: 'json'}).subscribe(data => {
      const jsonData = data;
      this.modeSwitchChecked = jsonData['running'];
    });
  }

}
