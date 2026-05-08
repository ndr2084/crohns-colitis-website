import { Component, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { SocialMediaBar } from "../../../../components/social-media-bar/social-media-bar";

interface Slide {
  image: string;
  title: string[];
  text: string[];
  primaryBtn: string;
  secondaryBtn: string;
}

@Component({
  selector: 'app-hero-section',
  imports: [SocialMediaBar],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',

})
export class HeroSection implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      image: "url('/hero-photo.png')",
      title: ['Your Donation Makes', 'A Difference'],
      text: ['Each donation supports patients, advancements in treatment options and ultimately — the search for cures'],
      primaryBtn: 'Donate',
      secondaryBtn: 'Learn More',
    },
    {
      image: "url('https://picsum.photos/seed/health2/1600/900')",
      title: ['Together We Can', 'Find a Cure'],
      text: ['Join thousands of Canadians fighting Crohn\'s disease and ulcerative colitis'],
      primaryBtn: 'Get Involved',
      secondaryBtn: 'Learn More',
    },
    {
      image: "url('https://picsum.photos/seed/health3/1600/900')",
      title: ['Support Your', 'Community'],
      text: ['Connect with others living with IBD across Canada and find the help you need'],
      primaryBtn: 'Find Support',
      secondaryBtn: 'Learn More',
    },
  ];

  currentIndex = signal(0);
  currentSlide = computed(() => this.slides[this.currentIndex()]);

  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.timer = setInterval(() => {
      this.currentIndex.update(i => (i + 1) % this.slides.length);
    }, 5000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
  }
}
