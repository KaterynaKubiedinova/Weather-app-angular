import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './view/components/footer/footer.component';
import { CityWeatherDetailsComponent } from './view/components/city-weather-details/city-weather-details.component';
import { CityWeatherComponent } from './view/components/city-weather/city-weather.component';
import { ButtonComponent } from './view/components/button/button.component';
import { HeaderComponent } from './view/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './view/pages/main-page/main-page.component';
import { CityPageComponent } from './view/pages/city-page/city-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CityMoreInfoPageComponent } from './view/pages/city-more-info-page/city-more-info-page.component';
import { CityMoreTomorrowDetailsPageComponent } from './view/pages/city-more-tomorrow-details-page/city-more-tomorrow-details-page.component';
import { CityHistoryPageComponent } from './view/pages/city-history-page/city-history-page.component';
import { CityDetailsPageComponent } from './view/pages/city-details-page/city-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CityWeatherComponent,
    MainPageComponent,
    CityPageComponent,
    CityWeatherDetailsComponent,
    ButtonComponent,
    CityMoreInfoPageComponent,
    CityMoreTomorrowDetailsPageComponent,
    CityHistoryPageComponent,
    CityDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
