import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersService } from '../app/services/characters.service';
import {HttpClientModule} from '@angular/common/http';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterComponent } from './pages/characters/character/character.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { DropDownItemComponent } from './components/drop-down-item/drop-down-item.component';
import { HousesComponent } from './pages/houses/houses.component';
import { HousesListComponent } from './components/houses-list/houses-list.component';
import { HouseComponent } from './pages/houses/house/house.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CharactersComponent,
    CharacterComponent,
    CharactersListComponent,
    CharacterDetailComponent,
    DropDownItemComponent,
    HousesComponent,
    HousesListComponent,
    HouseComponent,
    HouseDetailComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
