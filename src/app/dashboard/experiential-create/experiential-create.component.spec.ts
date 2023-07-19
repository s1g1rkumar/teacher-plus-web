import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperientialCreateComponent } from './experiential-create.component';

describe('ExperientialCreateComponent', () => {
  let component: ExperientialCreateComponent;
  let fixture: ComponentFixture<ExperientialCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperientialCreateComponent]
    });
    fixture = TestBed.createComponent(ExperientialCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
