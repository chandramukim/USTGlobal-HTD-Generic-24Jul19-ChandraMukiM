import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderComponent,
    HeaderComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'placeholder', component: PlaceholderComponent
      },
      {
        path: 'second', component: SecondComponent
      }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
