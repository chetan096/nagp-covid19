import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CoreModule } from '@app/core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '@app/core/services/login/login.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let loginService: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CoreModule, RouterTestingModule],
      providers: [LoginService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    loginService = TestBed.get(LoginService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show dashboard button when not on login page', () => {
    // Act
    fixture.detectChanges();
    // Assert
    expect(component.showDashboardButton).toBeFalse();
  });

  it('should have logged user name when logged in', () => {
    // Arrange 
    spyOn(loginService, 'getLoggedInUserName').and.returnValue('chetan');
    // Act
    component.ngOnChanges();
    // Assert
    expect(component.userLoggedIn).toBeTrue();
  });


});
