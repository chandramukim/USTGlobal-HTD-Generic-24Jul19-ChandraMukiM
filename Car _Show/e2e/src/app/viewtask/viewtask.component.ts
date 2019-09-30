import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
    taskk = {
      id: '',
      task: ''
    };

    task: any[];

  constructor(private service: TaskService) {
    this.getTask();
   }

  getTask() {
    this.service.getTask().subscribe(res => {
     this.task = res;
    }, err => {
      console.log(err);
    }, () => {
      console.log('success');
    });
  }

  deleteTask(key) {
    this.service.deleteTask(key).subscribe(data => {
      console.log(data);
      this.getTask();
    });
  }
  
  ngOnInit() {
  }

}
