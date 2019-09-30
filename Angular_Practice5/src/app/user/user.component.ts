import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  arr: any[] = [];

  constructor(private http: HttpClient) { 
    this.getData();
  }

  getData() {
    this.http.get<any>(`https://api.github.com/users`).subscribe(data => {
      this.arr = data;
      console.log(this.arr);
    }, err => {
      console.log(err);
    }, () => {
      console.log("Success");
    });
  }

  ngOnInit() {
  }

}
