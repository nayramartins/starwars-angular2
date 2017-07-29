import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersCardComponent } from './characters-card.component';

describe('CharactersCardComponent', () => {
  let component: CharactersCardComponent;
  let fixture: ComponentFixture<CharactersCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
