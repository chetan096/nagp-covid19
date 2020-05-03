import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, OnChanges, AfterContentInit } from '@angular/core';
import { ValidationService } from '@app/core/services/validators/validation.service';

@Component({
  selector: 'app-form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.css']
})
export class FormControlErrorComponent implements OnInit {



  @Input() control: FormControl;

  constructor() { }

  ngOnInit(): void {
  }


  get errorMessage() {
    if (this.control) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
          return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
      return null;
    }
  }
}
