import { LocalStorageService } from 'src/app/services/localStorage.service';
import { StorageService } from 'src/app/services/storage.service';
import { ApiStorageService } from './../../../services/api-storage.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ResponseForecastWeather } from 'src/app/models/response';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit{
  @Input() currentCity: ResponseForecastWeather = {} as ResponseForecastWeather;

  @Output() handleClick = new EventEmitter();
  locationName: string | undefined;
  icon: string | undefined;
  avgTemp: string | undefined;
  explanation: string | undefined;
  levelUv: number | undefined;
  date: string | undefined;
  constructor(
    private localStorageService: LocalStorageService
  ) { }
  ngOnInit(): void {
    if (this.currentCity) {
      this.locationName = this.currentCity.location.name;
      this.icon = this.currentCity.current.condition.icon;
      this.avgTemp = this.currentCity.current.temp_c.toFixed(0);
      this.explanation = this.currentCity.current.condition.text;
      this.levelUv = this.currentCity.current.uv;
      this.date = this.currentCity.forecast.forecastday[0].date
    }
  }
  
  removeFromFavorite(event: any) {
    event.stopPropagation();
    const favoriteCities = this.localStorageService.get('favoriteCities');
		const newFavoriteCities = favoriteCities.filter((city: ResponseForecastWeather) => city?.location?.name !== this.currentCity?.location.name);
		this.localStorageService.set('favoriteCities', newFavoriteCities);
    this.localStorageService.set('cityDetails', { ...this.currentCity, isFavorite: false });

    const currentCity = this.localStorageService.get('currentLocationWeather');
    if (currentCity.location.name === this.currentCity?.location.name) {
      this.localStorageService.set('currentLocationWeather', {...this.currentCity, isFavorite: false})
    }
  }
  onCityBlockClick() {
    this.handleClick.emit(this.currentCity?.location.name.replace(' ', '-'));
  }
}
