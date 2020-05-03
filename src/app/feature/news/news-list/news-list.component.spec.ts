import { Observable } from 'rxjs';
import { NewsService } from '@app/core/services/news/news.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from './../../../core/core.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListComponent } from './news-list.component';
import { News } from '@app/shared/models/news.model';
import { ToastrService } from 'ngx-toastr';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;
  let newsService: NewsService;
  let toastrService: ToastrService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsListComponent],
      imports: [CoreModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [NewsService, ToastrService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    newsService = TestBed.get(NewsService);
    toastrService = TestBed.get(ToastrService);
    fixture.detectChanges();
  });

  it('should set latest news list', () => {
    // Arrange
    const mockedData: News[] = [
      {
        id: 1,
        title: 'Title',
        description: 'Description',
        summary: 'Summary',
        date: new Date(),
        fullNews: 'Full News'
      }
    ];
    spyOn(newsService, 'getLatestNews').and.returnValue(Observable.create((observer => {
      observer.next(mockedData);
    })));
    // Act
    component.ngOnInit();
    // Assert
    expect(component.latestNews.length).toBe(1);
  });

  it('should throw error when failed to fetch latest news', () => {
    // Arrange
    spyOn(newsService, 'getLatestNews').and.returnValue(Observable.create((observer => {
      observer.error('Failed to fetch');
    })));
    spyOn(toastrService, 'error');
    // Act
    component.ngOnInit();
    // Assert
    expect(toastrService.error).toHaveBeenCalled();
  });
});
