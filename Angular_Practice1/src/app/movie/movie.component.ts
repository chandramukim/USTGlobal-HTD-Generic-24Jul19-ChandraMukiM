import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieArr: any[] = [];
  constructor(private http: HttpClient) {}

  searchMovie(movie: any) {
    this.http.get<any>(`http://www.omdbapi.com/?s=${movie}&apikey=465a6bdf`).subscribe(data => {
      this.movieArr = data.Search;
    });
  }

  ngOnInit() {
  }

}
