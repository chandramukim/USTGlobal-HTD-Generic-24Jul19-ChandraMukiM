import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  newMovie: any[] = [];
  constructor(private http: HttpClient) { }

  sendMovie(movies) {
    this.http.get<any>(`http://www.omdbapi.com/?s=${movies}&apikey=465a6bdf`). subscribe(data => {
      this.newMovie = data.Search;
      console.log(this.newMovie);
    }, err => {
      console.log(err);
    }, () => {
      console.log('Success');
    });
  }

  ngOnInit() {
  }

}
