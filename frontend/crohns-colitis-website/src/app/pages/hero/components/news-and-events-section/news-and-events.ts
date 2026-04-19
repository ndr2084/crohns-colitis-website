import { Component } from '@angular/core';
import { EventCard } from "./event-card/event-card";

@Component({
  selector: 'app-news-and-events',
  imports: [EventCard],
  templateUrl: './news-and-events.html',
  styleUrl: './news-and-events.scss',
})
export class NewsAndEvents {}
