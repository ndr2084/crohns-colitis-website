import { Component, viewChild } from '@angular/core';
import { StoryCardContainer } from "./story-card-container/story-card-container";

@Component({
  selector: 'app-community-stories',
  imports: [StoryCardContainer],
  templateUrl: './community-stories.html',
  styleUrl: './community-stories.scss',
})
export class CommunityStories {
  carousel = viewChild(StoryCardContainer);

  scrollLeft()  { this.carousel()?.scroll(-280); }
  scrollRight() { this.carousel()?.scroll(280);  }
}
