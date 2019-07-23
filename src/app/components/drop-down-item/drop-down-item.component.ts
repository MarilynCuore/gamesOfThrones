import { Component, OnInit, Input } from '@angular/core';
import { Titles } from '../../core/models/titles';

@Component({
  selector: 'app-drop-down-item',
  templateUrl: './drop-down-item.component.html',
  styleUrls: ['./drop-down-item.component.scss']
})
export class DropDownItemComponent implements OnInit {
  public open: boolean = false;
  @Input() body: Array<string>;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }
  change() {
    if (this.open) {
      this.open = false
    } else this.open = true
  }

}
