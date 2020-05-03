import { TestBed, async } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '@app/core/services/login/login.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from '@app/shared/guards/auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let loginService: LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LoginService, { provide: Router, useValue: mockRouter }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
    loginService = TestBed.get(LoginService);
  });

  it('should navigate to \'dashboard\' when admin has logged in', () => {
    const routeStateMock: any = {
      snapshot: {}, url: 'localhost:4200/login/admin'
    };
    spyOn(loginService, 'getLoggedInUserName').and.returnValue('chetan');
    guard.canActivate(new ActivatedRouteSnapshot(), routeStateMock);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should navigate to \'news\' when admin not logged in and add news', () => {
    const routeStateMock: any = {
      snapshot: {}, url: 'localhost:4200/news/add'
    };
    spyOn(loginService, 'getLoggedInUserName').and.returnValue('');
    guard.canActivate(new ActivatedRouteSnapshot(), routeStateMock);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/news']);
  });

});
