import { IResponseForecastWeather } from 'src/app/models/response';
import {  take } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { WeatherServices } from 'src/app/services/weather.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css']
})
export class CityPageComponent implements OnInit {
  cityInfo: IResponseForecastWeather = {} as IResponseForecastWeather;
  chosenCity: string;
  constructor(private weatherService: WeatherServices, private storageService: StorageService, private route: ActivatedRoute) {
    this.cityInfo = storageService.getChosenCity();
    this.chosenCity = route.snapshot.params["id"]
  }
  ngOnInit(): void {

    this.weatherService.getForecast(this.chosenCity)
      .pipe(take(1))
      .subscribe(city => {
      this.storageService.setChosenCity(city);
        this.cityInfo = this.storageService.getChosenCity();
    });
  }
  weatherInTwoWeeks() {
    this.weatherService.getForecast(this.chosenCity, 14)
      .subscribe(city => {
      this.storageService.setChosenCity(city);
        this.cityInfo = this.storageService.getChosenCity();
        console.log('city: ',this.cityInfo);
    });
  }
  addToFavorites() {
    this.storageService.addFavoriteCity(this.cityInfo);
  }

}
