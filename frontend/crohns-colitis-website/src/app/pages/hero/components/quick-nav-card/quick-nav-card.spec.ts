import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickNavCard } from './quick-nav-card';

describe('QuickNavCard', () => {
  let component: QuickNavCard;
  let fixture: ComponentFixture<QuickNavCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickNavCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickNavCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
