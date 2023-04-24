import { filter, tap } from 'rxjs';
import { LocalStorageService } from './../../../services/localStorage.service';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { ResponseForecastWeather } from 'src/app/models/response';
import { WeatherServices } from 'src/app/services/weather.service';
import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  currentCity: ResponseForecastWeather = {} as ResponseForecastWeather;
  favoriteCities: ResponseForecastWeather[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private weatherService: WeatherServices,
    private router: Router
  ) {
    this.currentCity = this.localStorageService.get('currentLocationWeather');
    console.log('ffff:',this.currentCity)
      if (!this.currentCity) {
        this.weatherService.getForecast()
          .pipe(tap(data => {
            console.log('data: ',data)
            this.localStorageService.set('currentLocationWeather', { ...data, isFavorite: false, isMore: false });
          }))
          .subscribe({ next: (data: ResponseForecastWeather) => this.localStorageService.set('currentLocationWeather', { ...data, isFavorite: false, isMore: false })})
        this.currentCity = this.localStorageService.get('currentLocationWeather');

      }
      // this.currentCity = this.localStorageService.get('currentLocationWeather');
      // console.log('current: ', this.currentCity)
      this.favoriteCities = this.localStorageService.get('favoriteCities');
      // console.log('favorite: ', this.favoriteCities)
  }
  ngOnInit(): void {
    this.currentCity = this.localStorageService.get('currentLocationWeather');
    console.log('ffff:',this.currentCity)
  }



  toCityDetailsPage(city: string) {
    this.router.navigate([`/${city}/details`])
  }
}
