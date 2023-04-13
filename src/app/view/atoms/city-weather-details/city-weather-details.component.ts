import { IForecastDay, IResponseForecastWeather } from './../../../models/response';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-weather-details',
  templateUrl: './city-weather-details.component.html',
  styleUrls: ['./city-weather-details.component.css']
})
export class CityWeatherDetailsComponent {
  @Input() currentCity: IForecastDay = {} as IForecastDay;
}
