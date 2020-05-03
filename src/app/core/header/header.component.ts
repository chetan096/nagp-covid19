import { LoginService } from '@app/core/services/login/login.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  appHeader = 'Covid-19 Tracker India';
  tabs = ['dashboard', 'news', 'precautions'];
  activeTab = this.tabs[0];
  userLoggedIn = false;
  currentLoggedInUser: string;
  showDashboardButton: boolean;
  showSignInButton = false;
  @Input() showTab: boolean;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    if (window.location.href.indexOf('/login/admin') !== -1) {
      this.showDashboardButton = true;
      this.showSignInButton = false;
    } else {
      this.showDashboardButton = false;
      this.showSignInButton = true;
    }
    this.navigateToDifferentModule(window.location.href);
  }

  ngOnChanges() {
    this.currentLoggedInUser = this.loginService.getLoggedInUserName();
    if (this.currentLoggedInUser) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  }

  navigateToDifferentModule(selectedTab: string) {
    if (selectedTab.indexOf('dashboard') !== -1) {
      this.activeTab = 'dashboard';
      this.router.navigate(['/dashboard']);
    } else if (selectedTab.indexOf('news') !== -1) {
      this.activeTab = 'news';
      this.router.navigate(['news']);
    } else if (selectedTab.indexOf('precautions') !== -1) {
      this.activeTab = 'precautions';
      this.router.navigate(['precautions']);
    }
  }

  logoutUser() {
    this.userLoggedIn = false;
    this.loginService.removeUserFromSession();
    this.router.navigate(['/login/admin']);
  }

}
