import { IForecastDay } from '../../../models/response';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-weather-more',
  templateUrl: './city-weather-more.component.html',
  styleUrls: ['./city-weather-more.component.css']
})
export class CityWeatherMoreComponent {
  @Input() weatherArray: IForecastDay[] | undefined;
}
