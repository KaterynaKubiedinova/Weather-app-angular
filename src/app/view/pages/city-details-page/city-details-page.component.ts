import { LocalStorageService } from './../../../services/localStorage.service';
import { ResponseForecastWeather } from './../../../models/response';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-city-details-page',
  templateUrl: './city-details-page.component.html',
  styleUrls: ['./city-details-page.component.css']
})
export class CityDetailsPageComponent {
  chosenCity: ResponseForecastWeather | undefined;

  constructor(private router: Router,
    private localStorageService: LocalStorageService,) {
    this.chosenCity = this.localStorageService.get('cityDetails');
  }
  onMoreClick(event: any) {
    event.stopPropagation();
    this.router.navigate([`/${this.chosenCity?.location.name}/more-info`]);
  }
}