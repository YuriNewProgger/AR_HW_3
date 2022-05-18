import { MoviesService } from './../services/movies.service';
import { Movie } from './../movie';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit, OnDestroy {

  listMovie: Movie[] = [];
  selectedMovie?: Movie;

  private subs: Subscription = Subscription.EMPTY;

  constructor(private moviesService: MoviesService, private _loc: Location) { }

  ngOnInit(): void {
    this.subs = this.moviesService.listMovies.subscribe((data) => this.display(data));
    this.moviesService.getMovies();
  }

  ngOnDestroy(): void{
    this.subs.unsubscribe();
  }

  display(movies: Movie[]){
    this.listMovie = movies;
  }

  getDitail(movie: Movie): void{
    this.selectedMovie = movie;
  }

  goBack(): void{
    this._loc.back();
    this.selectedMovie = undefined;
    
  }

}