import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { NavBar } from "./components/nav-bar/nav-bar";
import { SearchBar } from "./components/ui-elements/search-bar/search-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NavBar, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'crohns-colitis-website';
}
