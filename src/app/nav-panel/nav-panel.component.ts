import { MoviesService } from './../services/movies.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.css']
})
export class NavPanelComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  searchMovie(titleMovie: string): void{
    if(titleMovie){
      this.moviesService.getMovie(titleMovie);
    }
  }

}
