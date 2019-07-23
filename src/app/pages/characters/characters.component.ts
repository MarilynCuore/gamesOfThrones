import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters: Array<any> = [];
  constructor( private _characters: CharactersService ) {}

  ngOnInit() {
    this._characters.getData().subscribe(character => {
      this.characters = character;
      console.log(character);
    });
  }


}
