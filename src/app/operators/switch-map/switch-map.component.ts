import { Component, OnInit } from '@angular/core';
import { of, from, BehaviorSubject } from 'rxjs';
import { delay, map, switchAll, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent {

  constructor() {
    // Example 1 - Start
    // const getData = (param) => {
    //   return of(`retrieved new data with param ${param}`).pipe(
    //     delay(1000)
    //   );
    // };

    // // using a regular map
    // from([1, 2, 3, 4]).pipe(
    //   map(param => getData(param))
    // ).subscribe(val => val.subscribe(data => console.log(data)));

    // // using map and switchAll
    // from([1, 2, 3, 4]).pipe(
    //   map(param => getData(param)),
    //   switchAll()
    // ).subscribe(val => console.log(val));

    // // using switchMap
    // from([1, 2, 3, 4]).pipe(
    //   switchMap(param => getData(param))
    // ).subscribe(val => console.log(val));
    // Example 1 - End

    // Example 2 - start
    const filters = ['brand=porsche', 'model=911', 'horsepower=389', 'color=red']
    const activeFilters = new BehaviorSubject('');

    const getData = (params) => {
      return of(`retrieved new data with params ${params}`).pipe(
        delay(1000)
      );
    };

    const applyFilters = () => {
      filters.forEach((filter, index) => {

        let newFilters = activeFilters.value;
        if (index === 0) {
          newFilters = `?${filter}`;
        } else {
          newFilters = `${newFilters}&${filter}`;
        }

        activeFilters.next(newFilters);
      });
    };

    // using switchMap
    activeFilters.pipe(
      switchMap(param => getData(param))
    ).subscribe(val => console.log(val));

    applyFilters();
    // Example 2 - End

  }
}
