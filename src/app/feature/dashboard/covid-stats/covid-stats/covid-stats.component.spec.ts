import { StateDetailsComponent } from './../state-details/state-details.component';
import { HeaderComponent } from './../../../../core/header/header.component';
import { DashboardComponent } from '@app/feature/dashboard/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStatsComponent } from './covid-stats.component';
import { CovidStats } from '@app/shared/models/covid-stats-model';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

describe('CovidStatsComponent', () => {
  let component: CovidStatsComponent;
  let fixture: ComponentFixture<CovidStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CovidStatsComponent, HeaderComponent, StateDetailsComponent],
      imports: [HttpClientModule, RouterModule, CoreModule, SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
    component.covidStats = covidStats;
  });

  it('should display list of covid stats', () => {
    fixture.detectChanges();
    const tableRows = fixture.debugElement.nativeElement.querySelectorAll('tbody>tr');
    expect(tableRows.length).toBe(2);
  });

  it('should have 6 table headings', () => {
    fixture.detectChanges();
    const tableRows = fixture.debugElement.nativeElement.querySelectorAll('th');
    expect(tableRows.length).toBe(6);
  });

});
