import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private _url = 'https://api.got.show/api/show/characters/';
  constructor(private _http: HttpClient ) { }
  getCharacters(): Observable<any> {
    return this._http.get(this._url);
  }
  getCharacter(id): Observable<any> {
    return this._http.get(this._url + '/' + id);
  }
  getData(): Observable<any> {
    let observable: Observable<any> = this._http.get(this._url);
    let observableFiltered: Observable<any> = observable.pipe(
      map(
        (data: Array<any>) => {
          let datosFiltrados = [];
          data.forEach((character) => {
            if (character.image && character.name) {
              datosFiltrados.push(character);
            }
          });
          return datosFiltrados;
        }
      ),
    );
    return observableFiltered;
  }
}
