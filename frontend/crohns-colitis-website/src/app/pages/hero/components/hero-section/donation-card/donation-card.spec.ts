import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCard } from './donation-card';

describe('DonationCard', () => {
  let component: DonationCard;
  let fixture: ComponentFixture<DonationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonationCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
