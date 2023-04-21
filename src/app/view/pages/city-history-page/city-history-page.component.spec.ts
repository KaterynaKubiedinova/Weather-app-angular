import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityHistoryPageComponent } from './city-history-page.component';

describe('CityHistoryPageComponent', () => {
  let component: CityHistoryPageComponent;
  let fixture: ComponentFixture<CityHistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityHistoryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
