import { LoginService } from '@app/core/services/login/login.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnChanges } from '@angular/core';
import { News } from '@app/shared/models/news.model';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/internal/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  latestNews: News[] = [];
  adminLoggedIn: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    if (this.loginService.getLoggedInUserName()) {
      this.adminLoggedIn = true;
    } else {
      this.adminLoggedIn = false;
    }
  }

}
