import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  news: any[] = [];
  constructor(private http: HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=8b1b57fe9ce147d2bbdc6e91c2483a6d').
    subscribe(resData => {
      this.news = resData.articles;
      console.log(this.news);
    });
   }

  ngOnInit() {
  }

}
