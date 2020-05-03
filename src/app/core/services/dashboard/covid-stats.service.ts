import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CovidStats, StateWiseStats, DistrictStats } from '@app/shared/models/covid-stats-model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/internal/operators';
import { ErrorService } from '@app/core/services/errors/error.service';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidStatsService {

  private static readonly COVID_API_BASE_URL = environment.urls.COVID_STATS_BASE_URL;

  constructor(private errorService: ErrorService, private httpClient: HttpClient) { }

  getStateDistrictStats(): Observable<DistrictStats[] | any> {
    return this.httpClient.get<DistrictStats[]>(CovidStatsService.COVID_API_BASE_URL + '/state_district_wise.json').pipe(
      map(data => data as DistrictStats[]),
      catchError(err => this.errorService.handleError(err))
    );
  }

  getStateWiseStats(): Observable<CovidStats | any> {
    return this.httpClient.get<CovidStats>(CovidStatsService.COVID_API_BASE_URL + '/data.json').pipe(
      map(data => data as CovidStats),
      catchError(err => this.errorService.handleError(err))
    );
  }

}
