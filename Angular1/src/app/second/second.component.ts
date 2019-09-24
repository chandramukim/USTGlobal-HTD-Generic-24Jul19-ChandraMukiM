import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  arr: any[] = [];
  constructor(private http: HttpClient) { 
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').
    subscribe(resData => {
      this.arr = resData;
      console.log (this.arr);
    });
  }
  ngOnInit() {
  }

}
