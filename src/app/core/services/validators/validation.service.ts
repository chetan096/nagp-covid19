import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const errorMessageConfig = {
      required: 'Please enter value',
      invalidTitle: 'Characters like A-Z,a-Z,space and special chars like ,:- are only allowed',
      minlength: `Please enter atleast ${validatorValue.requiredLength} characters`,
      maxlength: `You can only enter max ${validatorValue.requiredLength} characters`
    };
    return errorMessageConfig[validatorName];
  }

  static titleValidator(control: FormControl) {
    if (control.value && control.value.match(/^[a-zA-Z0-9 :,-]*$/)) {
      return null;
    } else {
      return { invalidTitle: true };
    }
  }
}
