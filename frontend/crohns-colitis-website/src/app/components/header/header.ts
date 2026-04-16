import { Component } from '@angular/core';
import { SearchBar } from "../ui-elements/search-bar/search-bar";

@Component({
  selector: 'app-header',
  imports: [SearchBar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
