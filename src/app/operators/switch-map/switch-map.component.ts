import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { delay, map, switchAll, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent {

  constructor() {
    const getData = (param) => {
      return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
      );
    };

    // // using a regular map
    // from([1, 2, 3, 4]).pipe(
    //   map(param => getData(param))
    // ).subscribe(val => val.subscribe(data => console.log(data)));

    // // using map and switchAll
    // from([1, 2, 3, 4]).pipe(
    //   map(param => getData(param)),
    //   switchAll()
    // ).subscribe(val => console.log(val));

    // using switchMap
    from([1, 2, 3, 4]).pipe(
      switchMap(param => getData(param))
    ).subscribe(val => console.log(val));
  }
}
