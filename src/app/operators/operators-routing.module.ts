import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'mergeMap', component: MergeMapComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
