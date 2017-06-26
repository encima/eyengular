import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {

  @Input() movie;

  constructor() { }

  ngOnInit() {
    console.log(this.movie);
  }

}
