import { Component } from '@angular/core';
import { QuickNavCard } from "./components/quick-nav-card/quick-nav-card";
import { DonationCard } from "./components/donation-card/donation-card";
import { NewsAndEvents } from "./components/news-and-events/news-and-events";

@Component({
  selector: 'app-hero',
  imports: [QuickNavCard, DonationCard, NewsAndEvents],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
