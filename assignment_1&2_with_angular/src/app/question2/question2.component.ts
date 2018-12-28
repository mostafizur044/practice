import { Component, OnInit } from '@angular/core';
import { productlist } from './model';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss']
})
export class Question2Component implements OnInit {

  lists = productlist;
  carts = [];
  total = 0;

  constructor() { }

  ngOnInit() {
    
  }
  addToCArt (p) {
    this.carts.push(p);
    this.total = this.carts.reduce( (a, b) => a += b.amount, 0);
  }

  remove (i) {
    this.carts.splice(i, 1);
    this.total = this.carts.reduce( (a, b) => a += b.amount, 0);
  }

}
