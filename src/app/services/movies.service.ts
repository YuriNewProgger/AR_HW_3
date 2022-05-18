import { Movie } from './../movie';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private dataUrl: string = "http://www.omdbapi.com/?s=Marvel&apikey=365d77a0";

  public listMovies = new Subject<Movie[]>();

  constructor(private _http: HttpClient) { }

  getMovies(): void{
    this._http.get<Movie[]>(this.dataUrl).pipe(map((data: any) => data.Search), catchError(err => [])).subscribe(data => this.listMovies.next(data));
  }

  getMovie(titleMovie: string): void{
    let url: string = `http://www.omdbapi.com/?s=${titleMovie}&apikey=365d77a0`;

    this._http.get<Movie[]>(url).pipe(map((data: any) => data.Search)).subscribe(data => {
      this.listMovies.next(data)
    });
  }
}
