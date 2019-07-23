import { Component, OnInit } from '@angular/core';
import { HousesService  } from '../../services/houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {
  public houses: Array<any> = [];
  constructor(private _houses: HousesService ) { }

  ngOnInit() {
    this._houses.getData().subscribe( house => {
      this.houses = house;
      console.log(this.houses);
    });
  }
}
