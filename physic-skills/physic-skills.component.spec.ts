import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicSkillsComponent } from './physic-skills.component';

describe('PhysicSkillsComponent', () => {
  let component: PhysicSkillsComponent;
  let fixture: ComponentFixture<PhysicSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
