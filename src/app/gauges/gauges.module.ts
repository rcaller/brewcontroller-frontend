import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { GaugesComponent } from './gauges.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GaugesComponent]
})
export class GaugesModule { }
