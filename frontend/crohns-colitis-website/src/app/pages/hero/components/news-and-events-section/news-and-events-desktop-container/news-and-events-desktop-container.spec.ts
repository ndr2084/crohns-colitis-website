import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndEventsDesktopContainer } from './news-and-events-desktop-container';

describe('NewsAndEventsDesktopContainer', () => {
  let component: NewsAndEventsDesktopContainer;
  let fixture: ComponentFixture<NewsAndEventsDesktopContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAndEventsDesktopContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsAndEventsDesktopContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
