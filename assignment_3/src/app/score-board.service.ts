import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreBoardService {

  scors = [
    {id: 1, run: 1, ball: 1, out: 0, des: '1 Run', class: 'fa-navy'},
    {id: 2, run: 1, ball: 1, out: 0, des: '2 Runs', class: 'fa-purple'},
    {id: 3, run: 1, ball: 1, out: 0, des: '3 Runs', class: 'fa-red'},
    {id: 4, run: 1, ball: 1, out: 0, des: '4 Runs', class: 'fa-red'},
    {id: 5, run: 1, ball: 1, out: 0, des: '5 Runs', class: 'fa-blue'},
    {id: 6, run: 1, ball: 1, out: 0, des: '6 Runs', class: 'fa-blue'},
    {id: 7, run: 0, ball: 1, out: 1, des: 'Bowled', class: 'fa-green'},
    {id: 8, run: 0, ball: 1, out: 1, des: 'Run out', class: 'fa-green'},
    {id: 9, run: 0, ball: 1, out: 1, des: 'Caught', class: 'fa-orange'},
    {id: 10, run: 0, ball: 1, out: 1, des: 'Stumps', class: 'fa-navy'},
    {id: 11, run: 0, ball: 1, out: 0, des: 'Dot', class: 'fa-orange'}
  ];

  constructor() { }
}
