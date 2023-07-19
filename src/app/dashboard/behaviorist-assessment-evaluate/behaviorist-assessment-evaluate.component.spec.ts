import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioristAssessmentEvaluateComponent } from './behaviorist-assessment-evaluate.component';

describe('BehavioristAssessmentEvaluateComponent', () => {
  let component: BehavioristAssessmentEvaluateComponent;
  let fixture: ComponentFixture<BehavioristAssessmentEvaluateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehavioristAssessmentEvaluateComponent]
    });
    fixture = TestBed.createComponent(BehavioristAssessmentEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
