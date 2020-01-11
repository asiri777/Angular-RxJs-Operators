import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { State, states } from 'src/app/shared/state';
import { Vehicle, vehicles } from 'src/app/shared/vehicle';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  states$: Observable<State[]>;
  vehicle$: Observable<Vehicle[]>;

  constructor(private http: HttpClient) {
    // this.states$ = of(states);
    this.states$ = http.get<State[]>('http://localhost:3000/states');

    this.states$.pipe(
      map(stateList => stateList.map(state => `${state.abbreviation} - ${state.name}`)))
      .subscribe(stateList => console.log(stateList));

    this.vehicle$ = of(vehicles);
    this.vehicle$.pipe(
      map(vehicleList => vehicleList.map(vehicle => `${vehicle.brand} ${vehicle.model}`))
    ).subscribe(vehicle => console.log(vehicle));
    this.vehicle$.pipe(
      map(vehicleList => vehicleList.filter(vehicle => vehicle.brand === 'porsche'))
    ).subscribe(porsche => console.log(porsche));
  }

}
