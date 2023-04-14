import { IResponseForecastWeather } from 'src/app/models/response';
import {  filter, take, takeUntil } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { WeatherServices } from 'src/app/services/weather.services';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css']
})
export class CityPageComponent {
  cityInfo: IResponseForecastWeather = {} as IResponseForecastWeather;
  chosenCity: string = '';
  constructor(
    private weatherService: WeatherServices,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router) {
    this.cityInfo = storageService.getChosenCity();
  
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((value) => {
      this.chosenCity = route.snapshot.params["id"];
      this.weatherService.getForecast(this.chosenCity.replace('-', ' '))
        .subscribe(city => {
          this.storageService.setChosenCity(city);
            this.cityInfo = this.storageService.getChosenCity();
        });
    })
  }

  weatherInTwoWeeks(chosenCity: string) {
    this.weatherService.getForecast(chosenCity, 14)
      .subscribe(city => {
      this.storageService.setChosenCity(city);
        this.cityInfo = this.storageService.getChosenCity();
    });
  }

  addToFavorites(cityInfo: IResponseForecastWeather) {
    const condition = this.storageService.getFavoriteCities().find((city) => city?.location?.name === cityInfo.location.name);
    if (!condition) {
      this.storageService.addFavoriteCity(cityInfo);
    }
    return;
  }

}
