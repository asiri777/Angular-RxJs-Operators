import { Component } from '@angular/core';
import { of, from } from 'rxjs';
import { delay, map, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent {
  constructor() {
    const getData = (param) => {
      return of(`retrieved new data with param ${param}`).pipe(delay(1000));
    }
    // // using a regular map
    // from([1, 2, 3, 4]).pipe(
    //   map(param => getData(param))
    // ).subscribe(val => val.subscribe(data => console.log(data)));

    // // using map and mergeAll
    // from([1, 2, 3, 4]).pipe(
    //   map(param => getData(param)),
    //   mergeAll()
    // ).subscribe(val => console.log(val));

    // using mergeMap
    from([1, 2, 3, 4]).pipe(
      mergeMap(param => getData(param))
    ).subscribe(val => console.log(val));
  }
}
