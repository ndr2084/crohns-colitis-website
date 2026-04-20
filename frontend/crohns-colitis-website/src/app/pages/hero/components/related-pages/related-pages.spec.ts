import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedPages } from './related-pages';

describe('RelatedPages', () => {
  let component: RelatedPages;
  let fixture: ComponentFixture<RelatedPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
