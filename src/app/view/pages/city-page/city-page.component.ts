import { LocalStorageService } from './../../../services/localStorage.service';
import { WeatherServices } from './../../../services/weather.service';
import { ResponseForecastWeather } from 'src/app/models/response';
import { filter } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css']
})
export class CityPageComponent {
  cityDetails: ResponseForecastWeather | undefined;
  chosenCity: string = '';
  
  constructor(
    private weatherService: WeatherServices,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((value) => {
      this.chosenCity = route.snapshot.params["city"];

      const currentCity = localStorageService.get('currentLocationWeather');
      const inFavorite = localStorageService.get('favoriteCities')?.find((city: ResponseForecastWeather) => city.location.name === this.chosenCity);
    
      if (currentCity.location.name === this.chosenCity) {
        this.cityDetails = currentCity;
      } else if (inFavorite) {
        this.cityDetails = inFavorite
      } else {
        weatherService.getForecast(this.chosenCity, 14)
        .subscribe(data => {
          localStorageService.set('cityDetails', {...data, isFavorite: false, isMore: false})
          this.cityDetails = {...data, isFavorite: false, isMore: false};
        })
      }
      
      // this.cityInfo = storageService.getChosenCity();

      // if (storageService.getFavoriteCities().map((city: ResponseForecastWeather) => city.location.tz_id !== this.cityInfo.location.tz_id)) {
      //   this.alreadyFavorite = false;
      // } else {
      //   this.alreadyFavorite = true
      // }
    })
  }

  onMoreClick(chosenCity: string) {
    this.weatherService.getForecast(chosenCity, 14)
      .subscribe(data => {
        this.localStorageService.set('cityDetails', {...data, isFavorite: this.cityDetails?.isFavorite, isMore: true})
        this.cityDetails = this.localStorageService.get('cityDetails');
      });
  }
  onLessClick(chosenCity: string) {
    this.weatherService.getForecast(chosenCity)
    .subscribe(data => {
      this.localStorageService.set('cityDetails', {...data, isFavorite: this.cityDetails?.isFavorite, isMore: false})
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
