import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { delay, map, mergeMap, concatMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent {

  constructor() {
    const getData = (param) => {
      const delayTime = Math.floor(Math.random() * 10000) + 1;
      return of(`retrieved new data with params: ${param} and delay: ${delayTime}`).pipe(
        delay(delayTime)
      );
    };

    // // using a regular map
    // from([1, 2, 3, 4]).pipe(
    //   map(param => getData(param))
    // ).subscribe(val => val.subscribe(data => console.log('map:', data)));

    // // using mergeMap
    // from([1, 2, 3, 4]).pipe(
    //   mergeMap(param => getData(param))
    // ).subscribe(val => console.log('mergeMap:', val));

    // // using switchMap
    // from([1, 2, 3, 4]).pipe(
    //   switchMap(param => getData(param))
    // ).subscribe(val => console.log('concatMap:', val));

    // using concatMap
    from([1, 2, 3, 4]).pipe(
      concatMap(param => getData(param))
    ).subscribe(val => console.log('concatMap:', val));

  }
}
