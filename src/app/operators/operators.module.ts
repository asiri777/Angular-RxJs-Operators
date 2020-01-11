import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { OperatorsRoutingModule } from './operators-routing.module';



@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    OperatorsRoutingModule
  ],
  exports: [MapComponent]
})
export class OperatorsModule { }
