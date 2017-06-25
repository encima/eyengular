import { Component, OnInit, Input } from '@angular/core';

export interface Movie {
  poster_path;
  title;
  id;
  release_date;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() movies = [];

  constructor() { }

  ngOnInit() {
    console.log(this.movies);
  }

}
