import { Component, computed, signal } from '@angular/core';
import { NewsAndEventsDesktopContainer } from "./news-and-events-desktop-container/news-and-events-desktop-container";
import { NewsAndEvents } from '../news-and-events-section/news-and-events';
import { EventCardContainer } from "../news-and-events-section/event-card-container/event-card-container";

@Component({
  selector: 'app-news-and-events-desktop',
  imports: [NewsAndEventsDesktopContainer, NewsAndEvents, EventCardContainer],
  templateUrl: './news-and-events-desktop.html',
  styleUrl: './news-and-events-desktop.scss',
})
export class NewsAndEventsDesktop {

viewSignal = signal(false);

  toggleView = () =>{
    this.viewSignal.update(v => !v);
    console.log(this.viewSignal());
}
  buttonText = computed( () => this.viewSignal()? 'Row' : 'Grid')

}
