import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take, Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { WeatherServices } from 'src/app/services/weather.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  value: string = '';
  allCities: any;
  selected: boolean = false;
  constructor(private storageService: StorageService, private weatherService: WeatherServices, private router: Router) {}

  onKeyUp(event: any) {
    this.value = event.target.value;
    console.log(this.value)
    if (this.value.length > 2) {
      this.weatherService.getAllCities(this.value)
        .subscribe(allCity => {
          console.log(allCity)
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
      this.router.navigate([`/city/${this.value}`]);
    }
    this.value = '';
    return
  }

  logoClick() {
    this.router.navigate([''])
    this.value = '';
  }
}
