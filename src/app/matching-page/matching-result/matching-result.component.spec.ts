import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingResultComponent } from './matching-result.component';

describe('MatchingResultComponent', () => {
  let component: MatchingResultComponent;
  let fixture: ComponentFixture<MatchingResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchingResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
