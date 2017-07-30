import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsProfileComponent } from './starships-profile.component';

describe('StarshipsProfileComponent', () => {
  let component: StarshipsProfileComponent;
  let fixture: ComponentFixture<StarshipsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
