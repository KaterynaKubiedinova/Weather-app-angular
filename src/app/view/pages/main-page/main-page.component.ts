import { IResponseForecastWeather } from 'src/app/models/response';
import { WeatherServices } from 'src/app/services/weather.services';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  currentCity$: Observable<IResponseForecastWeather>;
  currentCity: IResponseForecastWeather;
  
  constructor(private storageService: StorageService, private weatherService: WeatherServices) {
    this.currentCity$ = this.storageService.getCurrentCity$();
    this.currentCity = storageService.getCurrentCity();
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather().subscribe((curr) => {
      this.storageService.setCurrentCity(curr);
      this.currentCity = this.storageService.getCurrentCity();
    })

  }
}
