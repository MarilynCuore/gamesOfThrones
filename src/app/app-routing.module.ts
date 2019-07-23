import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component'
import { CharacterComponent } from './pages/characters/character/character.component';
import { HousesComponent } from './pages/houses/houses.component';
import { HouseComponent } from './pages/houses/house/house.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path : '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'characters', component: CharactersComponent
  },
  {
    path: 'character/:name', component: CharacterComponent
  },
  {
    path: 'houses', component: HousesComponent
  },
  {
    path: 'house/:name', component: HouseComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
