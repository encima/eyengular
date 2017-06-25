import { Component, OnInit } from '@angular/core';

import {TmdbService} from '../tmdb.service';

import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm$ = new Subject<string>();

  constructor(private tSrv: TmdbService) {
   }

  ngOnInit() {

    this.tSrv.search(this.searchTerm$).subscribe(res => {
        // console.log(res);
    });
  }



}
