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

  public mode = 'PREP';
  public pollingInterval: any;
  constructor(private http: HttpClient) {
    this.pollingInterval = interval(5000);
    this.pollingInterval.subscribe(x =>
        this.getRunMode()
    );
  }

  ngOnInit() {
    this.getRunMode();
  }

  getRunMode() {
    this.http.get('http://' + window.location.hostname + ':8080/run_mode', {responseType: 'json'}).subscribe(data => {
      const jsonData = data;
      this.mode = jsonData['mode'];
  });
}

  setRunMode(item) {
    console.log('Toggle ' + item.value);
    this.mode = item.value;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post('http://localhost:8080/run_mode', {'runMode': this.mode}, {responseType: 'json'}).subscribe(data => {
      const jsonData = data;
      console.log(jsonData);
    });
  }

}
