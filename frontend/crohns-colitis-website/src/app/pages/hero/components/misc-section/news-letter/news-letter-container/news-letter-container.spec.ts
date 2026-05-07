import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetterContainer } from './news-letter-container';

describe('NewsLetterContainer', () => {
  let component: NewsLetterContainer;
  let fixture: ComponentFixture<NewsLetterContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsLetterContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsLetterContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
