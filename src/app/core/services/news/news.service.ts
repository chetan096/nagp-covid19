import { ErrorService } from '@app/core/services/errors/error.service';
import { catchError, map } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { News } from '@app/shared/models/news.model';
import { throwError, Observable } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private static readonly NEWS_API_BASE_URL = environment.urls.NEWS_API_BASE_URL;

  constructor(private errorService: ErrorService) { }

  getLatestNews(httpClient: HttpClient): Observable<News[] | any> {
    return httpClient.get<News[]>(NewsService.NEWS_API_BASE_URL).pipe(
      map(respData => respData),
      catchError(err => this.errorService.handleError(err))
    );
  }

  saveNews(news: News, httpClient: HttpClient) {
    return httpClient.post<News>(NewsService.NEWS_API_BASE_URL, news).pipe(
      catchError(err => this.errorService.handleError(err))
    );
  }
}
