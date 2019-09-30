import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private service: TaskService) { }

  sendTask(data) {
    this.service.sendTask(data).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    }, () => {
      console.log('Success');
    });
  }

  ngOnInit() {
  }

}
