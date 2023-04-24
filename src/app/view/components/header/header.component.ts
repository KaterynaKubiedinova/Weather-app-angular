import { LocalStorageService } from './../../../services/localStorage.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherServices } from 'src/app/services/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  value: string = '';
  allCities: any;
  selected: boolean = false;
  constructor(
    private weatherService: WeatherServices,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  onKeyUp(event: any) {
    this.value = event.target.value;
    if (this.value.length > 2) {
      this.weatherService.getAllCities(this.value)
        .subscribe(allCity => {
          this.allCities = allCity;
          this.selected = true;
        })
    }
    this.selected = false;
  }
  // onBlur(event: any) {
  //   this.selected = false
  // }
  onFocus() {
    if (this.value.length > 2) {
      this.selected = true;
    }
  }
  choseCity(event: any) {
    event.stopPropagation();
    this.value = event.target.textContent;
    this.selected = false;
  }
  confirmLocation(event: any) {
    event.preventDefault();
    if (this.value) {
      let url: string = "/city/" + this.value.replace(' ', '-')
      this.router.navigate([`/${this.value}/details`]);
    }
    this.value = '';
    return
  }

  onLogoClick() {
    this.router.navigate([''])
    this.localStorageService.remove('cityDetails')
    this.value = '';
  }
}
