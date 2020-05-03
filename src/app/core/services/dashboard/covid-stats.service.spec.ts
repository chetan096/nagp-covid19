import { TestBed } from '@angular/core/testing';
import { CovidStatsService } from '@app/core/services/dashboard/covid-stats.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CovidStats, DistrictStats } from '@app/shared/models/covid-stats-model';
import { environment } from 'environments/environment';


describe('CovidStatsService', () => {
  let service: CovidStatsService;
  let httpMock: HttpTestingController;
  const covidBaseURL = environment.urls.COVID_STATS_BASE_URL;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
    service = TestBed.inject(CovidStatsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call api to get state stats', () => {
    service.getStateWiseStats().subscribe(stats => {
      expect(stats).toBeDefined();
    });
    const req = httpMock.expectOne(`${covidBaseURL}/data.json`);
    expect(req.request.method).toBe('GET');
  });

  it('should call api to get districts stats', () => {
    service.getStateDistrictStats().subscribe(stats => {
      expect(stats).toBeDefined();
    });
    const req = httpMock.expectOne(`${covidBaseURL}/state_district_wise.json`);
    expect(req.request.method).toBe('GET');
  });

});
