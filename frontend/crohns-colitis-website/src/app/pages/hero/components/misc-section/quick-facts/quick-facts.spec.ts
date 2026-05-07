import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFacts } from './quick-facts';

describe('QuickFacts', () => {
  let component: QuickFacts;
  let fixture: ComponentFixture<QuickFacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickFacts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickFacts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
