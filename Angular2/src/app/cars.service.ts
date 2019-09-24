import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CarsService {
  url: string = 'https://cars-http.firebaseio.com/';

  selectedUser: User = {
    brand : null,
    model : null,
    yop : null,
    cost : null,
    num : null
  }

  

  constructor(private http: HttpClient) { }
  users = [];

  getData() {
    this.http.get(`${this.url}users.json`).pipe(map(resData => {
      let userArray = [];
      for (let key in resData) {
      userArray.push ({...resData[key], id:key})
      }
      return userArray;
    })).subscribe(data=>{
      this.users = data;
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
  postData(data) {
   return this.http.post(`${this.url}users.json`, data);
 }

 updateData(data) {
   return this.http.put(`${this.url}users/${data.id}.json`, data)
 }

 ngDoCheck() {
  this.getData ();
}

}
