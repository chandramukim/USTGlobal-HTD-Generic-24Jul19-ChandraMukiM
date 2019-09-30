import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user/user';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // postData(value: any) {
  //   throw new Error("Method not implemented.");
  // }
   url: string = 'https://angularhttp-2149a.firebaseio.com/';

   selectedUser:User={
     name : null,
     email : null,
     phno : null,
     id : null
   }

  constructor(private http: HttpClient) {
    
   }
    
   users = [];

   getData() {
     this.http.get(`${this.url}users.json`).pipe(map(resData => {
       let userArray = [];
       for (let key in resData) {
       userArray.push ({
          ...resData[key], id:key});
       }
       return userArray;
     })).subscribe(data => {
       this.users = data;
       console.log(data);
     }, err => {
       console.log(err);
     });
   }
   postData(data) {
    return this.http.post(`${this.url}users.json`, data);
  }

  updateData(data) {
    return  this.http.put(`${this.url}users/${data.id}.json`, data);
  }

  deleteData(data) {
    return this.http.delete(`${this.url}users/${data.id}.json`);
  }

  ngDoCheck(){
    this.getData();
  }
}
