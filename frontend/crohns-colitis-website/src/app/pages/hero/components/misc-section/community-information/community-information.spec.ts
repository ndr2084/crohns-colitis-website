import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityInformation } from './community-information';

describe('CommunityInformation', () => {
  let component: CommunityInformation;
  let fixture: ComponentFixture<CommunityInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
