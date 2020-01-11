import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [HomeComponent, NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [HomeComponent, NavComponent]
})
export class CoreModule { }
