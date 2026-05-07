import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFactsContainer } from './quick-facts-container';

describe('QuickFactsContainer', () => {
  let component: QuickFactsContainer;
  let fixture: ComponentFixture<QuickFactsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickFactsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickFactsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
