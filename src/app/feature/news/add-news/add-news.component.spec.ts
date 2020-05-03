import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@app/core/core.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsComponent } from './add-news.component';
import { Router } from '@angular/router';
import { NewsService } from '@app/core/services/news/news.service';
import { Observable } from 'rxjs';

describe('AddNewsComponent', () => {
  let component: AddNewsComponent;
  let fixture: ComponentFixture<AddNewsComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let newsService: NewsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewsComponent],
      imports: [CoreModule, BrowserAnimationsModule],
      providers: [{ provide: Router, useValue: mockRouter }, NewsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsComponent);
    component = fixture.componentInstance;
    newsService = TestBed.get(NewsService);
    fixture.detectChanges();
  });

  it('should reset form control value', () => {
    // Arrange
    fixture.detectChanges();
    component.newsForm.get('title').setValue('Title');
    // Act
    component.resetControl('title');
    // Assert
    expect(component.newsForm.get('title').value).toBe('');
  });

  it('should navigate to /news/list on add news', () => {
    // Arrange
    fixture.detectChanges();
    spyOn(newsService, 'saveNews').and.returnValue(Observable.create((observer) => {
      observer.next('');
    }));

    // Act
    component.addNews();
    // Assert
    expect(mockRouter.navigate).toHaveBeenCalledWith(['news/list']);
  });

  it('should reset form', () => {
    // Arrange
    fixture.detectChanges();
    component.newsForm.get('title').setValue('Title');
    // Act
    component.resetForm();
    // Assert
    expect(component.newsForm.get('title').value).toBeNull();
  });

});
