import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@app/core/core.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginService } from '@app/core/services/login/login.service';
import { AdminLoginComponent } from '@app/feature/login/admin-login/admin-login.component';
import { Header } from 'primeng/api/shared';
import { HeaderComponent } from '@app/core/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '@app/shared/models/user';
import { Location } from '@angular/common';
import { routes } from '@app/core/app-routing/app-routing.module';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;
  let loginService: LoginService;
  let toastrService: ToastrService;
  let fb: FormBuilder;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoginComponent, HeaderComponent],
      imports: [CoreModule, RouterTestingModule.withRoutes(routes), BrowserAnimationsModule],
      providers: [LoginService, ToastrService, FormBuilder, Location]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.get(LoginService);
    toastrService = TestBed.get(ToastrService);
    fb = TestBed.get(FormBuilder);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should be able to login with valid credentials and save username to session storage', () => {
    // Arrange
    const loginForm: FormGroup = fb.group({
      username: 'chetan',
      password: 'mahajan'
    });
    spyOn(loginService, 'validateUser').and.returnValue(true);
    // Act
    component.login(loginForm.value);
    // Assert
    expect(sessionStorage.getItem('username')).toBe('chetan');
  });

  it('should be able to restrict user with invalid credentials', () => {
    // Arrange
    spyOn(loginService, 'validateUser').and.returnValue(false);
    spyOn(toastrService, 'warning');
    // Act
    component.login({ username: '', password: '' });
    // Assert
    expect(toastrService.warning).toHaveBeenCalled();
  });

});
