import { Component, OnInit } from '@angular/core';
import { currentSeason } from './utils/currentSeason';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weather-app';
  season: string = '';

  ngOnInit(): void {
    this.season = currentSeason();
  }
}
