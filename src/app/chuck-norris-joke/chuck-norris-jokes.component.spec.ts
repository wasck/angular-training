import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisJokesComponent } from './chuck-norris-jokes.component';

describe('ChuckNorrisJokesComponent', () => {
  let component: ChuckNorrisJokesComponent;
  let fixture: ComponentFixture<ChuckNorrisJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuckNorrisJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckNorrisJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
