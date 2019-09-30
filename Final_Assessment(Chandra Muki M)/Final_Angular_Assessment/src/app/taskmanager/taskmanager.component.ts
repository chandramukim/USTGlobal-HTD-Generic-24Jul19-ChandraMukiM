import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {
  tasks: any;
  model = new Task('');
  submitted = false;

  sendTask(data) {
    this.model = data;
  }

  constructor() { }

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {
  }

}
