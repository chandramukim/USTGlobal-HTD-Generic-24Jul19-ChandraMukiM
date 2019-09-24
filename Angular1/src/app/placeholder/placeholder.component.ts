import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  arr: any[] = [];
  constructor(private http: HttpClient) { 
    this.http.get<any>('https://api.github.com/users').
    subscribe(resData => { 
      this.arr = resData;
      console.log(this.arr);
    });
  }

 
  ngOnInit() {
  }

}
