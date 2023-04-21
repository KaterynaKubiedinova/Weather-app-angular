import { ForecastDay } from '../../../models/response';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-weather-details',
  templateUrl: './city-weather-details.component.html',
  styleUrls: ['./city-weather-details.component.css']
})
export class CityWeatherDetailsComponent implements OnInit{
  @Input() currentCity: ForecastDay | undefined;
  date: string | undefined;
  icon: string | undefined;
  avgTemp: string | undefined;
  minTemp: string | undefined;
  maxTemp: string | undefined;
  explanation: string | undefined;
  maxwind: string | undefined;
  levelUv: number | undefined;

  ngOnInit(): void {
    if (this.currentCity) {
      this.date = this.currentCity.date;
      this.icon = this.currentCity.day.condition.icon;
      this.avgTemp = this.currentCity.day.avgtemp_c.toFixed(0);
      this.minTemp = this.currentCity.day.mintemp_c.toFixed(0);
      this.maxTemp = this.currentCity.day.maxtemp_c.toFixed(0);
      this.explanation = this.currentCity.day.condition.text;
      this.maxwind = this.currentCity.day.maxwind_kph.toFixed(0);
      this.levelUv = this.currentCity.day.uv;
    }
  }
}
