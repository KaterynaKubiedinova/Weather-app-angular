import { CityDetailsPageComponent } from './view/pages/city-details-page/city-details-page.component';
import { CityHistoryPageComponent } from './view/pages/city-history-page/city-history-page.component';
import { CityMoreTomorrowDetailsPageComponent } from './view/pages/city-more-tomorrow-details-page/city-more-tomorrow-details-page.component';
import { CityMoreInfoPageComponent } from './view/pages/city-more-info-page/city-more-info-page.component';
import { CityPageComponent } from './view/pages/city-page/city-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './view/pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, title: 'My cities weather' },
  {
    path: ':city',
    component: CityPageComponent,
    title: 'Details',
    children: [
      { path: 'details', component: CityDetailsPageComponent, title: 'Weather for city' },
      { path: 'more-info', component: CityMoreInfoPageComponent, title: 'Weather for two weeks' },
      { path: 'tomorrow', component: CityMoreTomorrowDetailsPageComponent, title: 'Weather for tomorrow' },
      { path: 'history', component: CityHistoryPageComponent, title:'Weather history'},
    ] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
