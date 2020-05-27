import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { GraphComponent } from './graph/graph.component';
import { HltComponent } from './hlt/hlt.component';
import { GaugesComponent } from './gauges/gauges.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { GoswitchComponent } from './goswitch/goswitch.component';
import { ModeswitchComponent } from './modeswitch/modeswitch.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BeerxmlUploaderComponent } from './beerxml-uploader/beerxml-uploader.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    GaugesComponent,
    HltComponent,
    GoswitchComponent,
    ModeswitchComponent,
    BeerxmlUploaderComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    ChartsModule,
    HttpClientModule,
    FileUploadModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
