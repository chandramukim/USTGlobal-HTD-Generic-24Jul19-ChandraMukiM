import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: any[] = [];
  technews: any[] = [];
  usnews: any[] = [];
  constructor(private http: HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8b1b57fe9ce147d2bbdc6e91c2483a6d').
    subscribe(resData => {
      this.news = resData.articles;
      console.log(this.news);
    });
    http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=8b1b57fe9ce147d2bbdc6e91c2483a6d').
    subscribe(respData => {
      this.usnews = respData.articles;
      console.log(this.usnews);
    });

    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8b1b57fe9ce147d2bbdc6e91c2483a6d')
    .subscribe(data => {
      this.technews = data.articles;
      console.log(this.technews);
    });
   }

  ngOnInit() {
  }

}
