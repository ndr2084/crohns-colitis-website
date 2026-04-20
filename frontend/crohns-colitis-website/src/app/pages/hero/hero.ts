import { Component } from '@angular/core';
import { NewsAndEvents } from "./components/news-and-events-section/news-and-events";
import { HeroSection } from "./components/hero-section/hero-section";
import { CommunityStories } from "./components/community-stories/community-stories";
import { CommunityInformation } from "./components/community-information/community-information";
import { RelatedPages } from "./components/related-pages/related-pages";

@Component({
  selector: 'app-hero',
  imports: [NewsAndEvents, HeroSection, CommunityStories, CommunityInformation, RelatedPages],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
