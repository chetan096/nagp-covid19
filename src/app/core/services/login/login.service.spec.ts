import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { User } from '@app/shared/models/user';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  afterEach(() => {
    sessionStorage.clear();
    service = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if creds are valid', () => {
    const user: User = {
      username: 'chetan',
      password: '12345'
    };
    expect(service.validateUser(user)).toBeTruthy();
  });

  it('should return false if creds are invalid', () => {
    // Arrange
    const user: User = {
      username: 'chetan123',
      password: '12345'
    };
    expect(service.validateUser(user)).toBeFalse();
  });

  it('should return username stored in session storage', () => {
    sessionStorage.setItem(service.usernameKeyLocalStorage, 'chetan');
    expect(service.getLoggedInUserName()).toBe('chetan');
  });

  it('should store username in session storage', () => {

    // Act
    service.saveLoggedInUserName('chetan');

    // Assert
    expect(service.getLoggedInUserName()).toBe('chetan');
  });

  it('should remove username from session storage', () => {
    service.removeUserFromSession();
    expect(service.getLoggedInUserName()).toBeNull();
  });



});
