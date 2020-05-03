import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlErrorComponent } from './form-control-error.component';
import { FormControl } from '@angular/forms';

describe('FormControlErrorComponent', () => {
  let component: FormControlErrorComponent;
  let fixture: ComponentFixture<FormControlErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormControlErrorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not have control when no input', () => {
    expect(component.control).toBeUndefined();
  });


  it('should not display when no error in form control', () => {
    component.control = new FormControl('');
    expect(component.errorMessage).toBeNull();
  });

  it('should display error when error in form control', () => {
    component.control = new FormControl('');
    component.control.markAsTouched();
    component.control.setErrors({ required: true });
    expect(component.errorMessage).toBe('Please enter value');
  });

});
