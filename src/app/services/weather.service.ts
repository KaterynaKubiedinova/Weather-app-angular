import { LocalStorageService } from './localStorage.service';
import { apiConfig } from './../config';
import { CityWeather } from './weather';
import { ResponseForecastWeather } from '../models/response';
import { map, Observable, Subject, switchMap } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'any'
})
export class WeatherServices{
	API_BASE_URL = 'http://api.weatherapi.com/v1';
	APP_KEY = 'key=0c0974048e654678bdf132718231204';
	// private weather: Subject<CityWeather> = new Subject<CityWeather>();
	
	constructor(
		private http: HttpClient,
		// private localStorageService: LocalStorageService
	) { }

	// getWeather(): Subject<CityWeather> {
	// 	return this.weather;
	// }
	// getCurrentCityWeather(): Observable<any> {
	// 	return Observable
	// 		.pipe(switchMap(() => {
	// 			return this.http.get(`${apiConfig.apiBaseUrl}/current.json?${apiConfig.apiKey}&q=auto:ip&lang=en`)
	// 				.pipe(map((response: any) => response.json()))
	// 				.pipe(map((data) => {
	// 					const weather = this.handleResponseWeatherData(data)

	// 					this.weather.next(weather);
	// 					return weather
	// 				}))
	// 		}))
	// }
	// getWeatherByCity(city: string, days: number = 7): Observable<any> {
	// 	return new Observable()
	// 		.pipe(switchMap(() => {
	// 			return this.http.get(`${apiConfig.apiBaseUrl}/forecast.json?${apiConfig.apiKey}&q=${city}&days=${days}`)
	// 				.pipe(map((response: any) => response.json()))
	// 				.pipe(map((data) => {
	// 					const weather = this.handleResponseWeatherData(data)

	// 					this.weather.next(weather);
	// 					this.localStorageService.set('selectedCityWeather', weather);
	// 					return weather
	// 				}))
	// 		}))
	// }
	// handleResponseWeatherData(response: ResponseForecastWeather): CityWeather {
	// 	const { location, current, forecast } = response;
	// 	const id = location.tz_id;
	// 	const city = location.name;
	// 	const country = location.country;
	// 	const explanation = current.condition.text;
	// 	const icon = current.condition.icon;
	// 	const temp = current.temp_c;
	// 	const feelsLikeTemp = current.feelslike_c;
	// 	const forecastWeather = forecast;
	// 	const alreadyFavorite = false;

	// 	return new CityWeather(
	// 		id,
	// 		city,
	// 		country,
	// 		explanation,
	// 		icon,
	// 		temp,
	// 		feelsLikeTemp,
	// 		forecastWeather,
	// 		alreadyFavorite
	// 	);
	// }
	getCurrentWeather(): Observable<ResponseForecastWeather> {
		return this.http.get<ResponseForecastWeather>(this.API_BASE_URL + '/forecast.json?' + this.APP_KEY + '&q=auto:ip&')
	}

	getAllCities(value: string) {
		return this.http.get(this.API_BASE_URL + '/search.json?' + this.APP_KEY + '&q=' + value)
	}
	getForecast(city: string = 'auto:ip', days: number = 7): Observable<ResponseForecastWeather> {
		return this.http.get<ResponseForecastWeather>(`${apiConfig.apiBaseUrl}/forecast.json?${apiConfig.apiKey}&q=${city}&days=${days}`)
	}
	getFuture(city: string): Observable<{}> {
		return this.http.get<{}>(this.API_BASE_URL + '/future.json?' + this.APP_KEY + '&q=' + city + '&dt=2023-05-11')
	}
}