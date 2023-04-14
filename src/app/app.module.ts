import { CityWeatherComponent } from './view/atoms/city-weather/city-weather.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/organisms/header/header.component';
import { FooterComponent } from './view/organisms/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CityWeatherMoreComponent } from './view/molecules/city-weather-more/city-weather-more.component';
import { FavoritesComponent } from './view/molecules/favorites/favorites.component';
import { MainPageComponent } from './view/pages/main-page/main-page.component';
import { CityPageComponent } from './view/pages/city-page/city-page.component';
import { CityWeatherDetailsComponent } from './view/atoms/city-weather-details/city-weather-details.component';
import { ButtonComponent } from './view/atoms/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CityWeatherComponent,
    FavoritesComponent,
    MainPageComponent,
    CityPageComponent,
    CityWeatherDetailsComponent,
    CityWeatherMoreComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
