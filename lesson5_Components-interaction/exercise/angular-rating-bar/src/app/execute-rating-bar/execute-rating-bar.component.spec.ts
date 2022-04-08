import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteRatingBarComponent } from './execute-rating-bar.component';

describe('ExecuteRatingBarComponent', () => {
  let component: ExecuteRatingBarComponent;
  let fixture: ComponentFixture<ExecuteRatingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteRatingBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteRatingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
