import { Router, NavigationEnd } from '@angular/router';
import { IResponseForecastWeather } from 'src/app/models/response';
import { WeatherServices } from 'src/app/services/weather.services';
import { Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  currentCity$: Observable<IResponseForecastWeather>;
  currentCity: IResponseForecastWeather;
  
  constructor(
    private storageService: StorageService,
    private weatherService: WeatherServices,
    private router: Router) {
    this.currentCity$ = this.storageService.getCurrentCity$();
    this.currentCity = storageService.getCurrentCity();

    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((value) => {
      this.weatherService.getCurrentWeather().subscribe((curr) => {
        this.storageService.setCurrentCity(curr);
        this.currentCity = this.storageService.getCurrentCity();
      })
    })
  }

  onCityClick(city: string) {
    this.router.navigate([`/city/${city}`])
  }
}
