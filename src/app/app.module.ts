import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { TmdbService } from './tmdb.service';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    SearchComponent,
    MovieViewComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
