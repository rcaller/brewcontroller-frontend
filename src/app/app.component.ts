import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  windowWidth: number = window.innerWidth;
  title = 'Brew';
  beer='beer';
  fridge='fridge'
}
