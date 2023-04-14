import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IResponseForecastWeather } from 'src/app/models/response';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent{
  @Input() currentCity: IResponseForecastWeather | undefined;

  @Output() handleClick = new EventEmitter();

  cityClick() {
    this.handleClick.emit(this.currentCity?.location.name.replace(' ', '-'));
  }
}
