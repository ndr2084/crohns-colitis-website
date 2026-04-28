import { Component, input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-mobile',
  imports: [],
  templateUrl: './nav-bar-mobile.html',
  styleUrl: './nav-bar-mobile.scss',
})
export class NavBarMobile {
  isOpen = input<boolean>(false);
}
