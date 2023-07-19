import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelConstructivistAssessmentEvaluateComponent } from './model-constructivist-assessment-evaluate.component';

describe('ModelConstructivistAssessmentEvaluateComponent', () => {
  let component: ModelConstructivistAssessmentEvaluateComponent;
  let fixture: ComponentFixture<ModelConstructivistAssessmentEvaluateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelConstructivistAssessmentEvaluateComponent]
    });
    fixture = TestBed.createComponent(ModelConstructivistAssessmentEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
