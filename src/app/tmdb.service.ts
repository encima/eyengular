import { Injectable } from '@angular/core';
import { Headers, Http, Response,  RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

import { environment } from '../environments/environment';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class TmdbService {

  KEY = '';
  ROOT_URL = 'https://api.themoviedb.org/3/';
  CONFIG_ENDPOINT = 'configuration';

  params: URLSearchParams = new URLSearchParams();

  config = {};
  movies = {};

  constructor(private http: Http) {
    this.KEY = environment.TMDB_KEY;
    this.configure();
    this.params.set('api_key', this.KEY);
  }

  search(terms: Observable<string>) {
    return terms.debounceTime(800)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(query: string) {
    let search_params = this.params.clone();
    search_params.set('query', query);
    let ro = new RequestOptions();
    ro.params = search_params;
    const url = this.ROOT_URL + 'search/movie';
    return this.http.get(url, ro).map(response => {
      let movies = response.json();
      movies['results'].map(movie => {
        movie['poster_path'] = this.config['images']['base_url'] + this.config['images']['poster_sizes'][4] + movie['poster_path'];
      },() => {
        // this.movies = movies;
        console.log(this.movies);
      });
      this.movies = movies;
      console.log(movies);
      
    });
  }

  configure() {
      const url = this.addKey(this.ROOT_URL + this.CONFIG_ENDPOINT);
      let ro = new RequestOptions();
      ro.params = this.params;
      return this.http.get(url).subscribe(res => {
        this.config = res.json();
        console.log(this.config);
      });
  }
  
  addKey(url) {
    return url + '?api_key=' + this.KEY;
  }

}
