import { Component, inject } from '@angular/core';
import { NewsAndEvents } from "./components/news-and-events-section/news-and-events";
import { HeroSection } from "./components/hero-section/hero-section";
import { CommunityStories } from "./components/community-stories/community-stories";
import { CommunityInformation } from "./components/misc-section/community-information/community-information";
import { RelatedPages } from "./components/related-pages/related-pages";
import { QuickNavSection } from "./components/quick-nav-section/quick-nav-section";
import { NavBarMobile } from "../../components/nav-bar-mobile/nav-bar-mobile";
import { MiscSection } from "./components/misc-section/misc-section";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-hero',
  imports: [NewsAndEvents, HeroSection, CommunityStories, CommunityInformation, RelatedPages, QuickNavSection, NavBarMobile, MiscSection, Footer],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
}
