import { Component } from '@angular/core';
import { QuickNavContainer } from "../quick-nav-container/quick-nav-container";

@Component({
  selector: 'app-hero-section',
  imports: [QuickNavContainer],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {}
