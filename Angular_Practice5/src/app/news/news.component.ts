import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newArr: any[] = [];
  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=in&apiKey=8b1b57fe9ce147d2bbdc6e91c2483a6d`).
    subscribe(data => {
      this.newArr = data.articles;
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
