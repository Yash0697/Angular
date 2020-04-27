import { Component, OnInit, ModuleWithProviders } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../Movie';
import movies from '../movies.json';
@Component({
  selector: 'app-movieapp',
  templateUrl: './movieapp.component.html',
  styleUrls: ['./movieapp.component.css']
})
export class MovieappComponent implements OnInit {

  genre:string;

movieList : Movie[];
genreList:string[] = [
    'Action',
    'Biography',
    'Comedy',
    'Crime',
    'Drama',
    'Romance',
];
  constructor(private route: ActivatedRoute) { 
    route.params.subscribe(params => { this.genre = params['genre']; });
    this.movieList=movies;
    if (this.genre != undefined) {
      let genre = this.genre;
      this.movieList = this.movieList.filter(function (movie) {
        return movie.genre == genre;
      });
    }
  }

  ngOnInit(): void {
  }

}
