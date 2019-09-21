import { Component, OnInit } from '@angular/core';
import { Addtask } from '../addtask';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  ele: any = '';
  constructor() { }
  sendForm(data) {
    this.ele = data;
    console.log(this.ele);
  }

  ngOnInit() {
  }

}
