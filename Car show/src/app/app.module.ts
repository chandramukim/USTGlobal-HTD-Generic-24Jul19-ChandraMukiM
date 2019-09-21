import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { HeaderComponent } from './header/header.component';
import { CardetailsComponent } from './cardetails/cardetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HeaderComponent,
    CardetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'car', component: CarComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
