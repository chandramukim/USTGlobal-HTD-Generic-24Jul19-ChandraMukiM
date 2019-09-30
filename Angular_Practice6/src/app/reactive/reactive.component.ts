import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  // color: string;
  power = 5;
  factor = 1;
  birthday = new Date(1997, 11, 11);

  toggle = true;

  get format() { return this.toggle ? 'shortDate' : 'fullDate'}
  func() {
    this.toggle = ! this.toggle;
  }

  constructor() { }

  ngOnInit() {
  }

}
