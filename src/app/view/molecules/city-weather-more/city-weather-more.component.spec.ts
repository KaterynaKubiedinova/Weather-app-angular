import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherMoreComponent } from './city-weather-more.component';

describe('CityWeatherDetailsComponent', () => {
  let component: CityWeatherMoreComponent;
  let fixture: ComponentFixture<CityWeatherMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityWeatherMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityWeatherMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
