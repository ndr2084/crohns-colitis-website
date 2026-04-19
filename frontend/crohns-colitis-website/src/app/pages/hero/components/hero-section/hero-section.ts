import { Component } from '@angular/core';
import { DonationCard } from './donation-card/donation-card';
import { QuickNavCard } from './quick-nav-card/quick-nav-card';

@Component({
  selector: 'app-hero-section',
  imports: [DonationCard, QuickNavCard],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {}
