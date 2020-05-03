
import { ValidationService } from './validation.service';
import { FormControl } from '@angular/forms';

describe('ValidationService', () => {

  it('should return null when passed valid title', () => {
    const control = new FormControl('Hello: This is news');
    expect(ValidationService.titleValidator(control)).toBeNull();
  });

  it('should return invalidTitle when passed invalid title', () => {
    const control = new FormControl('Hello; This is news');
    expect(ValidationService.titleValidator(control)).toEqual({ invalidTitle: true });
  });

  it('should return error message Required', () => {
    expect(ValidationService.getValidatorErrorMessage('required', '')).toBe('Please enter value');
  });

  it('should return error message min length', () => {
    expect(ValidationService.getValidatorErrorMessage('minlength', { requiredLength: 20 })).toBe('Please enter atleast 20 characters');
  });

  it('should return error message max length', () => {
    expect(ValidationService.getValidatorErrorMessage('maxlength', { requiredLength: 20 })).toBe('You can only enter max 20 characters');
  });

  it('should return error message invalidTitle', () => {
    expect(ValidationService.getValidatorErrorMessage('invalidTitle', true)).toBe('Characters like A-Z,a-Z,space and special chars like ,:- are only allowed');
  });

});
