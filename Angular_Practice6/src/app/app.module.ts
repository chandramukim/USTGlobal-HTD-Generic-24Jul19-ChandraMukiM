import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { MoviesComponent } from './movies/movies.component';
import { HealthComponent } from './health/health.component';
import { CarComponent } from './car/car.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { PageComponent } from './page/page.component';
import { HighlightDirective } from './highlight.directive';
import { BoostPipe } from './boost.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ReactiveComponent,
    MoviesComponent,
    HealthComponent,
    CarComponent,
    CarDetailComponent,
    PageComponent,
    HighlightDirective,
    BoostPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'form', component: FormComponent
      },
      {
        path: 'reactive', component: ReactiveComponent
      },
      {
        path: 'movies', component: MoviesComponent
      },
      {
        path: 'health', component: HealthComponent
      },
      {
        path: 'car', component: CarComponent
      },
      {
        path: '**', component: PageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
