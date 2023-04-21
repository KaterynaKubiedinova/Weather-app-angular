import { filter } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { LocalStorageService } from './../../../services/localStorage.service';
import { WeatherServices } from './../../../services/weather.service';
import { ResponseForecastWeather } from './../../../models/response';
import { Component } from '@angular/core';

@Component({
  selector: 'app-city-more-info-page',
  templateUrl: './city-more-info-page.component.html',
  styleUrls: ['./city-more-info-page.component.css']
})
export class CityMoreInfoPageComponent {
  cityDetails: ResponseForecastWeather | undefined;
  
  constructor(
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((value) => {
        this.cityDetails = this.localStorageService.get('cityDetails');
      });
      }

  addToFavorites() {
    const favoriteCities = this.localStorageService.get('favoriteCities');
    const condition = favoriteCities?.find((cityInfo: ResponseForecastWeather) => (
      this.cityDetails?.location?.name === cityInfo.location.name
    ));
    console.log(condition, this.cityDetails);
		if (!condition && favoriteCities) {
			const newFavoriteCities = [...favoriteCities, {...this.cityDetails, isFavorite: true}];
			this.localStorageService.set('favoriteCities', newFavoriteCities);
    }
    if(!favoriteCities){
      this.localStorageService.set('favoriteCities', [{...this.cityDetails, isFavorite: true}]);
    }
    this.localStorageService.set('cityDetails', { ...this.cityDetails, isFavorite: true });
    
    const currentCity = this.localStorageService.get('currentLocationWeather');
    if (currentCity.location.name === this.cityDetails?.location.name) {
      this.localStorageService.set('currentLocationWeather', {...this.cityDetails, isFavorite: true});
    }
    this.cityDetails = this.localStorageService.get('cityDetails');
  }
  removeFromFavorites() {
    const favoriteCities = this.localStorageService.get('favoriteCities');
		const newFavoriteCities = favoriteCities.filter((city: ResponseForecastWeather) => city?.location?.name !== this.cityDetails?.location.name);
		this.localStorageService.set('favoriteCities', newFavoriteCities);
    this.localStorageService.set('cityDetails', { ...this.cityDetails, isFavorite: false });

    const currentCity = this.localStorageService.get('currentLocationWeather');
    if (currentCity.location.name === this.cityDetails?.location.name) {
      this.localStorageService.set('currentLocationWeather', {...this.cityDetails, isFavorite: false})
    }
    this.cityDetails = this.localStorageService.get('cityDetails');
  }
}
