import { Component, inject } from '@angular/core';
import { SearchBar } from "../search-bar/search-bar";
import { NavBar } from "../nav-bar/nav-bar";
import { MobileNavService } from '../../services/mobile-nav-service';

@Component({
  selector: 'app-header',
  imports: [SearchBar, NavBar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private mobileNavService = inject(MobileNavService);

  navOpen(){
    console.log(this.mobileNavService.isOpen()); /*reads the signal*/
    this.mobileNavService.toggle(); /*flips the signal*/
    console.log(this.mobileNavService.isOpen());
  }

}
