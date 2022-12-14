import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  iconMenu: string = './../../../assets/images/icon-menu.svg';
  iconClose: string = './../../../assets/images/icon-menu-close.svg';
  isNavOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}
