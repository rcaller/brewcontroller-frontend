import { Component, OnInit } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-goswitch',
  templateUrl: './goswitch.component.html',
  styleUrls: ['./goswitch.component.css']
})
export class GoswitchComponent implements OnInit {
  public goSwitchColor:string = "accent";
  public goSwitchChecked:boolean = false;
  constructor() {

  }

  ngOnInit() {
  }

}
