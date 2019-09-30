import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  newHealth: any[] = [];
  constructor(private http: HttpClient) { }

  sendHealth(health) {
    this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=8b1b57fe9ce147d2bbdc6e91c2483a6d`)
    .subscribe( res => {
      this.newHealth = res.articles;
      console.log(this.newHealth);
    }, err => {
      console.log(err);
    }, () => {
      console.log('Success');
    })
  }

  ngOnInit() {
  }

}
