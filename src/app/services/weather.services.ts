import { IResponseForecastWeather } from '../models/response';
import { Observable } from 'rxjs';
import { BASE_URL } from './../constants/constanst';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class WeatherServices{
	constructor(private http: HttpClient) { }
	getCurrentWeather(): Observable<IResponseForecastWeather> {
		return this.http.get<IResponseForecastWeather>(BASE_URL + '/current.json?key=0c0974048e654678bdf132718231204&q=auto:ip&lang=en')
	}
	getAllCities(value: string) {
		return this.http.get(BASE_URL + '/search.json?key=0c0974048e654678bdf132718231204&q=' + value)
	}
	// getCity(city: string): Observable<ResponseCurrentInMyLocation> {
	// 	return this.http.get<ResponseCurrentInMyLocation>(BASE_URL + '/current.json?key=b88614b3fb684e8b996104153220302&q=' + city)
	// }
	getForecast(city: string, days: number = 3): Observable<IResponseForecastWeather> {
		return this.http.get<IResponseForecastWeather>(BASE_URL + '/forecast.json?key=0c0974048e654678bdf132718231204&q=' + city + '&days=' + days)
	}
	getFuture(city: string): Observable<{}> {
		return this.http.get<{}>(BASE_URL + '/future.json?key=0c0974048e654678bdf132718231204&q=' + city + '&dt=2023-05-11')
	}
}