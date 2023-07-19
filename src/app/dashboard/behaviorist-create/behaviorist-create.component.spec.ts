import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioristCreateComponent } from './behaviorist-create.component';

describe('BehavioristCreateComponent', () => {
  let component: BehavioristCreateComponent;
  let fixture: ComponentFixture<BehavioristCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehavioristCreateComponent]
    });
    fixture = TestBed.createComponent(BehavioristCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
