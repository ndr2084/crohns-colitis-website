import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityStories } from './community-stories';

describe('CommunityStories', () => {
  let component: CommunityStories;
  let fixture: ComponentFixture<CommunityStories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityStories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityStories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
