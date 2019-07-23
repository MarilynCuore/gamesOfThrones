import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../services/characters.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character: any = null;
  constructor(
    private _character: CharactersService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      if ( params && params.name) {
        this.makeRequest(params.name);
      }
     });
  }
  makeRequest(id) {
    this._character.getCharacter(id).subscribe(c => {
      this.character = c;
      console.log(this.character);
    });
  }

}
