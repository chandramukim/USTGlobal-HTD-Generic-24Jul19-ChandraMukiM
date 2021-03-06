import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { HeaderComponent } from './header/header.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MovieComponent } from './movie/movie.component';
import { TformComponent } from './tform/tform.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HeaderComponent,
    CardetailsComponent,
    PagenotfoundComponent,
    MovieComponent,
    TformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'car', component: CarComponent
      },
      {
        path: 'page', component: PagenotfoundComponent
      },
      {
        path: 'movie', component: MovieComponent
      },
      {
        path: 'tform', component: TformComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
