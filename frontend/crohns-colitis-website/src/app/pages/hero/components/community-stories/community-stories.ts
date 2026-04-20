import { Component } from '@angular/core';
import { StoryCard } from "./story-card/story-card";

@Component({
  selector: 'app-community-stories',
  imports: [StoryCard],
  templateUrl: './community-stories.html',
  styleUrl: './community-stories.scss',
})
export class CommunityStories {

}
