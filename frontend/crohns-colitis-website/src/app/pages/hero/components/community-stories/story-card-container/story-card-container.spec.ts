import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCardContainer } from './story-card-container';

describe('StoryCardContainer', () => {
  let component: StoryCardContainer;
  let fixture: ComponentFixture<StoryCardContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryCardContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryCardContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
