import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/internal/operators';
import { News } from '@app/shared/models/news.model';
import { NewsService } from '@app/core/services/news/news.service';
import { AppConstants } from '@app/shared/constants/app-constants';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  latestNews: News[];
  showFullNews: boolean;
  currentFullNews: string;

  constructor(private toastrService: ToastrService, private httpClient: HttpClient,
              private router: Router, private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getLatestNews(this.httpClient).subscribe(
      data => this.latestNews = (data as News[]),
      error => this.toastrService.error(error.message, AppConstants.APP_NAME)
    );
  }

  openDialogBox(selectedNewsId: number) {
    const selectedNews = this.latestNews.filter(news =>
      news.id === selectedNewsId);
    this.currentFullNews = selectedNews[0].fullNews;
    this.showFullNews = true;
  }
}
