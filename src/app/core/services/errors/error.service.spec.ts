import { TestBed } from '@angular/core/testing';

import { ErrorService } from './error.service';
import { HttpErrorResponse, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('ErrorService', () => {
  let service: ErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw error', () => {
    service.handleError(new HttpErrorResponse({ error: 'Failed' }))
      .subscribe(
        data => data,
        error =>
          expect(error.error).toBe('Failed'));
  });

});
