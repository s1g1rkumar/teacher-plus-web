import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructivistCreateComponent } from './constructivist-create.component';

describe('ConstructivistCreateComponent', () => {
  let component: ConstructivistCreateComponent;
  let fixture: ComponentFixture<ConstructivistCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConstructivistCreateComponent]
    });
    fixture = TestBed.createComponent(ConstructivistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
