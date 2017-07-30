import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesProfileComponent } from './species-profile.component';

describe('SpeciesProfileComponent', () => {
  let component: SpeciesProfileComponent;
  let fixture: ComponentFixture<SpeciesProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
