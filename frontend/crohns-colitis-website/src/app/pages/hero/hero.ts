import { Component, inject } from '@angular/core';
import { NewsAndEvents } from "./components/news-and-events-section/news-and-events";
import { HeroSection } from "./components/hero-section/hero-section";
import { CommunityStories } from "./components/community-stories/community-stories";
import { CommunityInformation } from "./components/community-information/community-information";
import { RelatedPages } from "./components/related-pages/related-pages";
import { QuickNavContainer } from "./components/quick-nav-container/quick-nav-container";
import { NavBarMobile } from "../../components/nav-bar-mobile/nav-bar-mobile";

@Component({
  selector: 'app-hero',
  imports: [NewsAndEvents, HeroSection, CommunityStories, CommunityInformation, RelatedPages, QuickNavContainer, NavBarMobile],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
}
