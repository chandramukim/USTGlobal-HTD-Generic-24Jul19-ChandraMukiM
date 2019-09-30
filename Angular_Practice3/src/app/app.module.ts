import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { HttpClient } from 'selenium-webdriver/http';
import { MoviesComponent } from './movies/movies.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { TechComponent } from './tech/tech.component';
import { UserComponent } from './user/user.component';
import { CustompipePipe } from './custompipe.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    MoviesComponent,
    FirebaseComponent,
    GeneralComponent,
    HealthComponent,
    ScienceComponent,
    TechComponent,
    UserComponent,
    CustompipePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path : 'home',component :HomeComponent 
      },
      {
        path : 'user',component :UserComponent
      },
      {
        path : 'general',component : GeneralComponent
      },
      {
        path : 'health',component : HealthComponent
      },
      {
        path : 'science',component : ScienceComponent
      },
      {
        path : 'tech',component : TechComponent 
      },
      {
        path: 'news',component :NewsComponent
      },
      {
        path: 'movies',component :MoviesComponent
      },
      {
        path: 'firebase',component :FirebaseComponent
      }
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
