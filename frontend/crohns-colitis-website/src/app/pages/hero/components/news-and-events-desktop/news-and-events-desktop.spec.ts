import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndEventsDesktop } from './news-and-events-desktop';

describe('NewsAndEventsDesktop', () => {
  let component: NewsAndEventsDesktop;
  let fixture: ComponentFixture<NewsAndEventsDesktop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAndEventsDesktop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsAndEventsDesktop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
