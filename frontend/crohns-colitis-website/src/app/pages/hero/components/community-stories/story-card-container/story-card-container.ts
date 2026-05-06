import { Component, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-story-card-container',
  imports: [RouterLink],
  templateUrl: './story-card-container.html',
  styleUrl: './story-card-container.scss',
})
export class StoryCardContainer {
  readonly #el = inject(ElementRef);

  scroll(px: number): void {
    this.#el.nativeElement.scrollBy({ left: px, behavior: 'smooth' });
  }
}
