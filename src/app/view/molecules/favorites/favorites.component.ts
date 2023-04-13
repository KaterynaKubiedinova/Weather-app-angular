import { IResponseForecastWeather } from 'src/app/models/response';
import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favoriteCities: IResponseForecastWeather[] = [{} as IResponseForecastWeather];
  constructor(private storageService: StorageService) {
  }
}
