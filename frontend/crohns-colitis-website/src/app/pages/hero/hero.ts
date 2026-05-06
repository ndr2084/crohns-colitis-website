import { Component, inject } from '@angular/core';
import { NewsAndEvents } from "./components/news-and-events-section/news-and-events";
import { HeroSection } from "./components/hero-section/hero-section";
import { CommunityStories } from "./components/community-stories/community-stories";
import { CommunityInformation } from "./components/community-information/community-information";
import { RelatedPages } from "./components/related-pages/related-pages";
import { QuickNavSection } from "./components/quick-nav-section/quick-nav-section";
import { NavBarMobile } from "../../components/nav-bar-mobile/nav-bar-mobile";
import { NewsAndEventsDesktop } from "./components/news-and-events-desktop/news-and-events-desktop";

@Component({
  selector: 'app-hero',
  imports: [NewsAndEvents, HeroSection, CommunityStories, CommunityInformation, RelatedPages, QuickNavSection, NavBarMobile, NewsAndEventsDesktop],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
}
