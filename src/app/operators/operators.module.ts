import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { OperatorsRoutingModule } from './operators-routing.module';
import { MergeMapComponent } from './merge-map/merge-map.component';



@NgModule({
  declarations: [MapComponent, MergeMapComponent],
  imports: [
    CommonModule,
    OperatorsRoutingModule
  ],
  exports: [MapComponent]
})
export class OperatorsModule { }
