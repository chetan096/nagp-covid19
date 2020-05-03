import { CoreModule } from '@app/core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '@app/core/header/header.component';
import { LoginService } from '@app/core/services/login/login.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let loginService: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsComponent, HeaderComponent],
      imports: [RouterTestingModule, CoreModule],
      providers: [LoginService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    loginService = TestBed.get(LoginService);
    fixture.detectChanges();
  });

  it('should show admin login button when not stored in session', () => {
    spyOn(loginService, 'getLoggedInUserName').and.returnValue(null);
    component.ngOnInit();
    expect(component.adminLoggedIn).toBeFalse();
  });

  it('should not show admin login button when stored in session', () => {
    spyOn(loginService, 'getLoggedInUserName').and.returnValue('chetan');
    component.ngOnInit();
    expect(component.adminLoggedIn).toBeTrue();
  });
});
