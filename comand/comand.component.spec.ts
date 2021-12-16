import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandComponent } from './comand.component';

describe('ComandComponent', () => {
  let component: ComandComponent;
  let fixture: ComponentFixture<ComandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
