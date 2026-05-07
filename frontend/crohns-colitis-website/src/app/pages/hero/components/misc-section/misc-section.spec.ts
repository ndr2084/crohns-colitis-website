import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscSection } from './misc-section';

describe('MiscSection', () => {
  let component: MiscSection;
  let fixture: ComponentFixture<MiscSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiscSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
