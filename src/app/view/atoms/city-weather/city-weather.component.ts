import { Component, Input } from '@angular/core';
import { IResponseForecastWeather } from 'src/app/models/response';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent{
  @Input() currentCity: IResponseForecastWeather = {} as IResponseForecastWeather;

  constructor(private route: ActivatedRoute) {}
}
