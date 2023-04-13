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
export class HeaderComponent implements OnInit {
  value: string;
  value$: Observable<string>;
  allCities: any;
  selected: boolean = false;
  constructor(private storageService: StorageService, private weatherService: WeatherServices, private router: Router) {
    this.value = storageService.getInputValue();
    this.value$ = storageService.getInputValue$();
  }
  ngOnInit(): void {
    this.value$ = this.storageService.getInputValue$();
  }

  
  onKeyUp(event: any) {
    this.storageService.setInputValue(event.target.value);
    console.log(this.storageService.getInputValue())
    this.value = this.storageService.getInputValue();
    if (this.value.length > 2) {
      this.weatherService.getAllCities(this.value)
        .pipe(take(1))
        .subscribe(allCity => {
          this.allCities = allCity;
          this.selected = true;
        })
    }
    this.selected = false;
  }
  choseCity(event: any) { 
    this.storageService.setInputValue(event.target.textContent);
    this.value = this.storageService.getInputValue();
    this.selected = false;
  }
  confirmLocation(event: any) {
    event.preventDefault();
    console.log('confirmed', this.value, this.selected, this.storageService.getInputValue())
    if (this.value) {
      let url: string = "/city/" + this.value
      this.router.navigateByUrl(url);
    }
    return
  }
}
