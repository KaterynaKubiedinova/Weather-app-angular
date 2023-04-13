import { CityPageComponent } from './view/pages/city-page/city-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './view/pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, title: 'My cities weather' },
  { path: 'city/:id', component: CityPageComponent, title:'Weather'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
