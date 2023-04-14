import { IResponseForecastWeather } from 'src/app/models/response';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  favoriteCities: IResponseForecastWeather[] | undefined;
  constructor(private storageService: StorageService) {
  }
  ngOnInit(): void {
    this.favoriteCities = this.storageService.getFavoriteCities();
    console.log(this.favoriteCities)
  }
}
