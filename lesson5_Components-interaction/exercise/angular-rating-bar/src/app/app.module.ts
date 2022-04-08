import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { ExecuteRatingBarComponent } from './execute-rating-bar/execute-rating-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponent,
    ExecuteRatingBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
