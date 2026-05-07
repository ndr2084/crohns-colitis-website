import { Component } from '@angular/core';
import { CommunityInformation } from "./community-information/community-information";
import { NewsLetter } from "./news-letter/news-letter";
import { QuickFacts } from "./quick-facts/quick-facts";

@Component({
  selector: 'app-misc-section',
  imports: [CommunityInformation, NewsLetter, QuickFacts],
  templateUrl: './misc-section.html',
  styleUrl: './misc-section.scss',
})
export class MiscSection {

}
