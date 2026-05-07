import { Component, computed, signal } from '@angular/core';
import { EventCardContainer } from "./event-card-container/event-card-container";
import { NewsAndEventsDesktopContainer } from "./news-and-events-desktop-container/news-and-events-desktop-container";

@Component({
  selector: 'app-news-and-events',
  imports: [EventCardContainer, NewsAndEventsDesktopContainer],
  templateUrl: './news-and-events.html',
  styleUrl: './news-and-events.scss',
})
export class NewsAndEvents {
  viewSignal = signal(false);

  toggleView = () =>{
    this.viewSignal.update(v => !v);
    console.log(this.viewSignal());
}
  buttonText = computed( () => this.viewSignal()? 'Row' : 'Grid')

}
