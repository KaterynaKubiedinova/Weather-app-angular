import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailsPageComponent } from './city-details-page.component';

describe('CityDetailsPageComponent', () => {
  let component: CityDetailsPageComponent;
  let fixture: ComponentFixture<CityDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
