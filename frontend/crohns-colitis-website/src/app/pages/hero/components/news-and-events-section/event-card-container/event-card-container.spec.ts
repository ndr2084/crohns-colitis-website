import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardContainer } from './event-card-container';

describe('EventCardContainer', () => {
  let component: EventCardContainer;
  let fixture: ComponentFixture<EventCardContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCardContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCardContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
