import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceTerritoryCard } from './province-territory-card';

describe('ProvinceTerritoryCard', () => {
  let component: ProvinceTerritoryCard;
  let fixture: ComponentFixture<ProvinceTerritoryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvinceTerritoryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinceTerritoryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
