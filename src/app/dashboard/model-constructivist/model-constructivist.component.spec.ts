import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelConstructivistComponent } from './model-constructivist.component';

describe('ModelConstructivistComponent', () => {
  let component: ModelConstructivistComponent;
  let fixture: ComponentFixture<ModelConstructivistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelConstructivistComponent]
    });
    fixture = TestBed.createComponent(ModelConstructivistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
