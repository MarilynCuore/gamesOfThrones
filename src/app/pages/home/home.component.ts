import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public characters: Array<any> = [];

  constructor(private _characters: CharactersService) { }

  ngOnInit() {
    this._characters.getCharacters().subscribe(character => {
      this.characters = character;

    });
  }

}
