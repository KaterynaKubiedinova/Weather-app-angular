import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityMoreTomorrowDetailsPageComponent } from './city-more-tomorrow-details-page.component';

describe('CityMoreTomorrowDetailsPageComponent', () => {
  let component: CityMoreTomorrowDetailsPageComponent;
  let fixture: ComponentFixture<CityMoreTomorrowDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityMoreTomorrowDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityMoreTomorrowDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
