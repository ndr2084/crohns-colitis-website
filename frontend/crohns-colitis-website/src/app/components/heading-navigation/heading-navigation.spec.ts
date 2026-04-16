import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingNavigation } from './heading-navigation';

describe('HeadingNavigation', () => {
  let component: HeadingNavigation;
  let fixture: ComponentFixture<HeadingNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadingNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
