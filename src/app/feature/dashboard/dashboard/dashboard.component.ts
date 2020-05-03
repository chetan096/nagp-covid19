import { CovidStats, StateWiseStats } from '@app/shared/models/covid-stats-model';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, state, style } from '@angular/animations';
import { CovidStatsService } from '@app/core/services/dashboard/covid-stats.service';
import { ToastrService } from 'ngx-toastr';
import { AppConstants } from '@app/shared/constants/app-constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  covidStats: CovidStats;

  constructor(private covidStatsService: CovidStatsService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.covidStatsService.getStateWiseStats()
      .subscribe(data => {
        this.covidStats = data;
        const totalRow = data.statewise[0];
        this.covidStats.statewise = data.statewise.slice(1);
        this.covidStats.statewise.push(totalRow);
      },
        error => this.toastrService.error('Failed to fetch covid stats', AppConstants.APP_NAME));
  }

}
