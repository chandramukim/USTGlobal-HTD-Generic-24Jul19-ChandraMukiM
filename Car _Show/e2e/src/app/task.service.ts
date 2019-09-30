import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = "https://cars-http.firebaseio.com/";

  constructor(private http: HttpClient ) { }

  sendTask(data) {
    return this.http.post(`${this.url}/cars-http.json`, data);
  }

  getTask() {
    return this.http.get(`${this.url}/cars-http.json`).pipe(map(data => {
      let newArr: any[] = [];
      for(let key in data) {
        newArr.push({...data[key], id: key});
      }
      return newArr;
    }));
  }

  updateTask(key, data) {
    return this.http.patch(`${this.url}/taskk/${key}.json`, data);
  }

  deleteTask(key) {
    return this.http.delete(`${this.url}/taskk/${key}.json`);
  }

}
