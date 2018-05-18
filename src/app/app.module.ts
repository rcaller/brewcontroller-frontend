import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { GraphComponent } from './graph/graph.component';
import { GaugesComponent } from './gauges/gauges.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpModule } from '@angular/http';
import { GoswitchComponent } from './goswitch/goswitch.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BeerxmlUploaderComponent } from './beerxml-uploader/beerxml-uploader.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    GaugesComponent,
    GoswitchComponent,
    BeerxmlUploaderComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatGridListModule,
    MatSlideToggleModule,
    ChartsModule,
    HttpModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
