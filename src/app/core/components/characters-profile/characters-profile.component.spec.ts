import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersProfileComponent } from './characters-profile.component';

describe('CharactersProfileComponent', () => {
  let component: CharactersProfileComponent;
  let fixture: ComponentFixture<CharactersProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
