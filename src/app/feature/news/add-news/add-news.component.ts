import { AppConstants } from '@app/shared/constants/app-constants';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NewsService } from '@app/core/services/news/news.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnChanges } from '@angular/core';
import { News } from '@app/shared/models/news.model';
import { catchError } from 'rxjs/internal/operators';
import { throwError, Observable, Subject, Observer } from 'rxjs';
import { Router } from '@angular/router';
import { ValidationService } from '@app/core/services/validators/validation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  newsForm: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private router: Router,
              private newsService: NewsService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.newsForm = this.fb.group({
      title: ['', [Validators.required, ValidationService.titleValidator]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      summary: ['', [Validators.required, Validators.minLength(20)]],
      fullNews: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  addNews() {
    this.newsService.saveNews(this.newsForm.value, this.httpClient)
      .subscribe(
        data => this.router.navigate(['news/list']),
        error => this.toastrService.error('Error saving news', AppConstants.APP_NAME)
      );
  }

  resetForm() {
    this.newsForm.reset();
  }

  resetControl(control: string) {
    this.newsForm.get(control).patchValue('');
  }

}
