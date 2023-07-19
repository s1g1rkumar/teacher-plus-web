import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioristComponent } from './behaviorist.component';

describe('BehavioristComponent', () => {
  let component: BehavioristComponent;
  let fixture: ComponentFixture<BehavioristComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehavioristComponent]
    });
    fixture = TestBed.createComponent(BehavioristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
