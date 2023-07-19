import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperientialAssessmentEvaluateComponent } from './experiential-assessment-evaluate.component';

describe('ExperientialAssessmentEvaluateComponent', () => {
  let component: ExperientialAssessmentEvaluateComponent;
  let fixture: ComponentFixture<ExperientialAssessmentEvaluateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperientialAssessmentEvaluateComponent]
    });
    fixture = TestBed.createComponent(ExperientialAssessmentEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
