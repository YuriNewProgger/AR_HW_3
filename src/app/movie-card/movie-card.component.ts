import { Movie } from './../movie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() cardMovie?: Movie;

  textFish : string = "Discription: Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  

  constructor() { }

  ngOnInit(): void {
  }

}
