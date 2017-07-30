import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsProfileComponent } from './planets-profile.component';

describe('PlanetsProfileComponent', () => {
  let component: PlanetsProfileComponent;
  let fixture: ComponentFixture<PlanetsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
