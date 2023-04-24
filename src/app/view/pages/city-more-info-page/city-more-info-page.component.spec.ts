import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityMoreInfoPageComponent } from './city-more-info-page.component';

describe('CityMoreInfoPageComponent', () => {
  let component: CityMoreInfoPageComponent;
  let fixture: ComponentFixture<CityMoreInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityMoreInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityMoreInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
