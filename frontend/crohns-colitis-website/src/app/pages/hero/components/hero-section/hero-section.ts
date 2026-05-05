import { Component } from '@angular/core';
import { SocialMediaBar } from "../../../../components/social-media-bar/social-media-bar";

@Component({
  selector: 'app-hero-section',
  imports: [SocialMediaBar],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {}
