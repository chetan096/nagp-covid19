import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CovidStatsService } from '@app/core/services/dashboard/covid-stats.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from '@app/core/core.module';
import { By } from '@angular/platform-browser';
import { StateDetailsComponent } from '@app/feature/dashboard/covid-stats/state-details/state-details.component';
import { DistrictStats } from '@app/shared/models/covid-stats-model';

describe('StateDetailsComponent', () => {
  let component: StateDetailsComponent;
  let fixture: ComponentFixture<StateDetailsComponent>;
  let covidStatsService: CovidStatsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StateDetailsComponent],
      imports: [CoreModule],
      providers: [CovidStatsService, ToastrService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDetailsComponent);
    component = fixture.componentInstance;
    covidStatsService = TestBed.get(CovidStatsService);
    fixture.detectChanges();
  });

  it('should create 1 header row', () => {
    const tableRows = fixture.debugElement.nativeElement.querySelectorAll('thead');
    expect(tableRows.length).toBe(1);
  });

  it('should have heading confirmed with class confirmed', () => {
    expect(fixture.debugElement.query(By.css('.confirmed')).nativeElement.textContent).toBe(' Confirmed ');
  });

  it('should display district stats list', () => {
    component.currentState = 'Punjab';
    fixture.detectChanges();
    const districtStats: DistrictStats[] = [
      {
        district: 'Pathankot',
        deceased: 20,
        confirmed: 100,
        active: 70,
        recovered: 10
      }
    ];
    const mockData = {
      Punjab: {
        districtData: districtStats
      }
    };
    spyOn(covidStatsService, 'getStateDistrictStats').and.returnValue(Observable.create((observer => {
      observer.next(mockData);
    })));
    component.ngOnChanges();
    expect(component.selectedStateDistrictStats.length).toBe(1);
  });


});
