import { Component } from '@angular/core';
import { SearchBar } from "../search-bar/search-bar";
import { NavBar } from "../nav-bar/nav-bar";

@Component({
  selector: 'app-header',
  imports: [SearchBar, NavBar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
