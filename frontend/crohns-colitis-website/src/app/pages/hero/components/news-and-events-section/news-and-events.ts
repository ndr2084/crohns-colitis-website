import { Component } from '@angular/core';
import { EventCardContainer } from "./event-card-container/event-card-container";

@Component({
  selector: 'app-news-and-events',
  imports: [EventCardContainer],
  templateUrl: './news-and-events.html',
  styleUrl: './news-and-events.scss',
})
export class NewsAndEvents {}
