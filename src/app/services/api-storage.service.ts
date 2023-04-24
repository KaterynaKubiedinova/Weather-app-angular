import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { WeatherServices } from './weather.service';

@Injectable({
	providedIn: 'root'
})
export class ApiStorageService{
	constructor(
		private weatherService: WeatherServices,
		private storageService: StorageService
	) {}
	setCurrentCity() {
		this.weatherService.getCurrentWeather()
			.subscribe(city => {
				this.storageService.setCurrentCity(city);
			})
	}
	setChosenCity(city: string, days: number = 7) {
		this.weatherService.getForecast(city, days)
			.subscribe(city => {
				this.storageService.setChosenCity(city);
			})
	}
}