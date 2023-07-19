import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperientialComponent } from './experiential.component';

describe('ExperientialComponent', () => {
  let component: ExperientialComponent;
  let fixture: ComponentFixture<ExperientialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperientialComponent]
    });
    fixture = TestBed.createComponent(ExperientialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
