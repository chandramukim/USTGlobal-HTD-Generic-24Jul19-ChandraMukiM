import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  newArr: any[] = [];
  constructor(private http: HttpClient) { 
    this.getData();
  }

  getData() {
    this.http.get<any>(`https://jsonplaceholder.typicode.com/users`)
    .subscribe(res => {
      this.newArr = res;
      console.log(this.newArr);
    }, err => {
      console.log(err);
    }, () => {
      console.log('success');
    });
  }

  ngOnInit() {
  }

}
