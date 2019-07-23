import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from '../../../services/houses.service';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  public house: any;

  constructor(
    private _house: HousesService,
    private _route: ActivatedRoute ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      if ( params && params.name) {
        this.makeRequest(params.name);
      }
     });
  }
  makeRequest(id) {
    this._house.getHouse(id).subscribe(house => {
      this.house = house;
      console.log(this.house);
    });
  }
}
