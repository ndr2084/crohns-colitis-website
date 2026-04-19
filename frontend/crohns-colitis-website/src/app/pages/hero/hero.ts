import { Component } from '@angular/core';
import { QuickNavCard } from "./components/quick-nav-card/quick-nav-card";
import { DonationCard } from "./components/donation-card/donation-card";

@Component({
  selector: 'app-hero',
  imports: [QuickNavCard, DonationCard],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
