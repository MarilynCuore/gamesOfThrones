import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  private _url = 'https://api.got.show/api/show/houses';
  constructor(private _http: HttpClient ) { }
  getHouses(): Observable<any> {
    return this._http.get(this._url);
  }
  getHouse(id): Observable<any> {
    let observable: Observable<any> = this._http.get(this._url + '/' + id);
    let observableFiltered: Observable<any> = observable.pipe(
      map(
        (data: Array<any>) => {
          return data[0];
        }
      )
    );

    return observableFiltered;
  }
  getData(): Observable<any> {
    let observable: Observable<any> = this._http.get(this._url);
    let observableFiltered: Observable<any> = observable.pipe(
      map(
        (data: Array<any>) => {
          let datosFiltrados = [];
          data.forEach((house) => {
            if (house.logoURL && house.name) {
              datosFiltrados.push(house);
            }
          });
          return datosFiltrados;
        }
      ),
    );
    return observableFiltered;
  }
}
