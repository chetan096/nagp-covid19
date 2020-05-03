import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { state } from '@angular/animations';
import { StateWiseStats, CovidStats } from '@app/shared/models/covid-stats-model';
import { Observable } from 'rxjs';
import { CoreModule } from '@app/core/core.module';
import { ToastrService } from 'ngx-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovidStatsService } from '@app/core/services/dashboard/covid-stats.service';
import { DashboardComponent } from '@app/feature/dashboard/dashboard/dashboard.component';
import { ErrorService } from '@app/core/services/errors/error.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let covidStatsService: CovidStatsService;
  let toastrService: ToastrService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        CoreModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        CovidStatsService,
        ToastrService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    covidStatsService = TestBed.get(CovidStatsService);
    toastrService = TestBed.get(ToastrService);
    fixture.detectChanges();
  });

  it('should set list of covid stats', () => {
    // Arrange
    const covidStats: CovidStats = {
      statewise: [
        {
          active: 35,
          confirmed: 70,
          deaths: 30,
          state: 'Total',
          recovered: 5
        },
        {
          active: 35,
          confirmed: 70,
          deaths: 30,
          state: 'Punjab',
          recovered: 5
        }
      ]
    };
    spyOn(covidStatsService, 'getStateWiseStats').and.returnValue(Observable.create((observer => {
      observer.next(covidStats);
    })));

    // Act
    component.ngOnInit();
    // Assert
    expect(covidStatsService.getStateWiseStats).toHaveBeenCalled();
    expect(component.covidStats.statewise.length).toEqual(2);
  });

  it('should display error on failure from covid stats service', () => {
    // Arrange
    spyOn(covidStatsService, 'getStateWiseStats').and.returnValue(Observable.create((observer => {
      observer.error('Error fetching stats');
    })));

    spyOn(toastrService, 'error');

    // Act
    component.ngOnInit();
    // Assert
    expect(covidStatsService.getStateWiseStats).toHaveBeenCalled();
    expect(toastrService.error).toHaveBeenCalled();
  });





});
