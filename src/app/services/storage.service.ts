import { IResponseForecastWeather } from '../models/response';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: 'root',
})
export class StorageService {
	private currentCitySubject: BehaviorSubject<IResponseForecastWeather> = new BehaviorSubject({} as IResponseForecastWeather);

	getCurrentCity$(): Observable<IResponseForecastWeather> {
		return this.currentCitySubject.asObservable();
	}
	getCurrentCity(): IResponseForecastWeather {
		return this.currentCitySubject.getValue();
	}
	setCurrentCity(newValue: IResponseForecastWeather) {
		this.currentCitySubject.next(newValue);
	}

	private favoriteCitiesSubject: BehaviorSubject<IResponseForecastWeather[]> = new BehaviorSubject([{} as IResponseForecastWeather]);
	getFavoriteCities$(): Observable<IResponseForecastWeather[]> {
		return this.favoriteCitiesSubject.asObservable();
	}
	getFavoriteCities(): IResponseForecastWeather[] {
		return this.favoriteCitiesSubject.getValue();
	}
	addFavoriteCity(city: IResponseForecastWeather): void {
		const cities = this.getFavoriteCities();

		this.setFavoriteCities([...cities, city])
	}
	deleteFavoriteCity(id: string): void {
		const cities = this.getFavoriteCities().filter((item) => item.location.tz_id !== id);

    this.setFavoriteCities(cities);
	}
	setFavoriteCities(newValue: IResponseForecastWeather[]) {
		this.favoriteCitiesSubject.next(newValue);
	}

	private chosenCitySubject: BehaviorSubject<IResponseForecastWeather> = new BehaviorSubject({} as IResponseForecastWeather);
	getChosenCity$(): Observable<IResponseForecastWeather> {
		return this.chosenCitySubject.asObservable();
	}
	getChosenCity(): IResponseForecastWeather {
		return this.chosenCitySubject.getValue();
	}
	setChosenCity(newValue: IResponseForecastWeather) {
		this.chosenCitySubject.next(newValue);
	}

}