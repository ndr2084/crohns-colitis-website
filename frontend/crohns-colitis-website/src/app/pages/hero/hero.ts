import { Component } from '@angular/core';
import { NewsAndEvents } from "./components/news-and-events/news-and-events";
import { HeroSection } from "./components/hero-section/hero-section";

@Component({
  selector: 'app-hero',
  imports: [NewsAndEvents, HeroSection],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
