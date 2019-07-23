import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('menu', {static: true}) menu: ElementRef;
  public navItems: Array<any> = [
    {
      title: 'Personajes',
      icon: 'account_circle',
      url : 'characters',
      match: ['characters', 'character']
    },
    {
      title: 'Casas',
      icon: 'home',
      url: 'houses',
      match: ['houses', 'house']
    }
  ];

  constructor(
    private nav: ElementRef
  ) { }
  ngOnInit() { }
  openMenuMobile() {
    if (this.nav.nativeElement.classList.contains('open')) {
      this.nav.nativeElement.classList.remove('open');
      this.menu.nativeElement.innerHTML = 'menu';
    } else  {
      this.nav.nativeElement.classList.add('open');
      this.menu.nativeElement.innerHTML = 'close';
    }
    this.menu.nativeElement.style.transform = 'rotate(360deg)x';
  }

   isActive(item): boolean {

    return item.match.includes( (location as any).pathname.replace('/', '') )
  }

}
