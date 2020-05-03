import { environment } from './../../../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';
import { HttpClient } from '@angular/common/http';
import { News } from '@app/shared/models/news.model';

describe('NewsService', () => {
  let service: NewsService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  const newsBaseUrl = environment.urls.NEWS_API_BASE_URL;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NewsService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
  });

  it('should call api to get state stats', () => {
    service.getLatestNews(httpClient).subscribe(res => {
      expect(res).toBeDefined();
    });
    const req = httpMock.expectOne(`${newsBaseUrl}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call api to save new news added by admin', () => {
    const news: News = {
      id: 1,
      title: 'Title',
      description: 'Description',
      summary: 'Summary',
      fullNews: 'Full News',
      date: new Date()
    };

    service.saveNews(news, httpClient).subscribe(res => {
      expect(res).toBeDefined();
    });
    const req = httpMock.expectOne(`${newsBaseUrl}`);
    expect(req.request.method).toBe('POST');
  });

});
