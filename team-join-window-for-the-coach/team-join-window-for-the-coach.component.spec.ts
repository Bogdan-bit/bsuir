import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamJoinWindowForTheCoachComponent } from './team-join-window-for-the-coach.component';

describe('TeamJoinWindowForTheCoachComponent', () => {
  let component: TeamJoinWindowForTheCoachComponent;
  let fixture: ComponentFixture<TeamJoinWindowForTheCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamJoinWindowForTheCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamJoinWindowForTheCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
