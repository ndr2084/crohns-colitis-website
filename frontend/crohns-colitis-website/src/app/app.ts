import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { NavBar } from "./components/nav-bar/nav-bar";
import { SearchBar } from "./components/search-bar/search-bar";
import { Hero } from "./pages/hero/hero";
import { NavBarMobile } from "./components/nav-bar-mobile/nav-bar-mobile";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NavBar, SearchBar, Hero, NavBarMobile],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'crohns-colitis-website';
}
