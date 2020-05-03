import { Injectable } from '@angular/core';
import { User } from '@app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly usernameKeyLocalStorage = 'username';

  constructor() { }

  // validate user creds
  validateUser(user: User): boolean {
    let validUser = false;
    if (user.username === 'chetan' && user.password === '12345') {
      validUser = true;
    }
    return validUser;
  }

  // get admin name
  getLoggedInUserName() {
    return sessionStorage.getItem(this.usernameKeyLocalStorage);
  }

  // save user to session
  saveLoggedInUserName(username: string) {
    sessionStorage.setItem(this.usernameKeyLocalStorage, username);
  }

  // remove user from session storage
  removeUserFromSession(): any {
    sessionStorage.removeItem(this.usernameKeyLocalStorage);
  }
}
