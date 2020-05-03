import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@app/core/services/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { AppConstants } from '@app/shared/constants/app-constants';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {


  loginForm: FormGroup;
  hide = true;

  /**
   *
   * @param fb : FormBuilder
   * @param route : Router
   * @param loginService : LoginService
   */
  constructor(private fb: FormBuilder, private route: Router, private loginService: LoginService,
              private toastrService: ToastrService) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

login(myform: User) {
  if (this.loginService.validateUser(myform)) {
    this.loginService.saveLoggedInUserName(myform.username);
    this.route.navigate(['/dashboard']);
    this.toastrService.success('Logged in successfully!', AppConstants.APP_NAME);
  } else {
    this.toastrService.warning('Please enter valid credentials!', AppConstants.APP_NAME);
  }
}

getErrorMessage(control: string) {
  if (this.loginForm.get(control).hasError('required')) {
    return 'Please enter a value';
  }
}

resetForm() {
  this.loginForm.reset();
}


}
