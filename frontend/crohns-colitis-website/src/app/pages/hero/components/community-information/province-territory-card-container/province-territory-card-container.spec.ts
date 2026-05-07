import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceTerritoryCardContainer } from './province-territory-card-container';

describe('ProvinceTerritoryCardContainer', () => {
  let component: ProvinceTerritoryCardContainer;
  let fixture: ComponentFixture<ProvinceTerritoryCardContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvinceTerritoryCardContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinceTerritoryCardContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
