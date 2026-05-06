import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickNavContainer } from './quick-nav-container';

describe('QuickNavContainer', () => {
  let component: QuickNavContainer;
  let fixture: ComponentFixture<QuickNavContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickNavContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickNavContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
