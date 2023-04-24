import { ResponseForecastWeather } from 'src/app/models/response';
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'any',
})
export class StorageService {
	setCurrentCity(city: ResponseForecastWeather, alreadyFavorite: boolean = false) {
		localStorage.setItem('currentCity', JSON.stringify({...city, alreadyFavorite}));
	}
	getCurrentCity(): ResponseForecastWeather {
		return JSON.parse(localStorage.getItem('currentCity') || '');
	}
	setChosenCity(city: ResponseForecastWeather) {
		localStorage.setItem('chosenCityInfo', JSON.stringify(city));
	}
	getChosenCity(): ResponseForecastWeather {
    return JSON.parse(localStorage.getItem('chosenCityInfo') || '');
	}
	setFavoriteCity(city: ResponseForecastWeather, alreadyFavorite: boolean) {
		const favoriteCities = JSON.parse(localStorage.getItem('favoriteCities') || '');
		const condition = favoriteCities.find((cityInfo: ResponseForecastWeather) => city?.location?.tz_id === cityInfo.location.tz_id);
		if (!condition) {
			const newFavoriteCities = [...favoriteCities, city];
			localStorage.setItem('favoriteCities', JSON.stringify(newFavoriteCities));
		}
	}
	getFavoriteCities() {
		return JSON.parse(localStorage.getItem('favoriteCities') || '');
	}
	removeFavoriteCity(id: string) {
		const favoriteCities = JSON.parse(localStorage.getItem('favoriteCities') || '');
		const newFavoriteCities = favoriteCities.filter((city: ResponseForecastWeather) => city?.location?.tz_id !== id);
		localStorage.setItem('favoriteCities', JSON.stringify(newFavoriteCities));
	}
}