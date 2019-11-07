import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingFormComponent } from './matching-form.component';

describe('MatchingFormComponent', () => {
  let component: MatchingFormComponent;
  let fixture: ComponentFixture<MatchingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
