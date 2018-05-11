import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { GraphComponent } from './graph/graph.component';
import { GaugesComponent } from './gauges/gauges.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    GaugesComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatGridListModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
