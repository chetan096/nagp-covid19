import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from '@app/feature/dashboard/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from '@app/feature/dashboard/dashboard-routing.module';
import { StateDetailsComponent } from '@app/feature/dashboard/covid-stats/state-details/state-details.component';
import { CovidStatsComponent } from '@app/feature/dashboard/covid-stats/covid-stats/covid-stats.component';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';



@NgModule({
  declarations: [DashboardComponent, CovidStatsComponent, StateDetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  exports: [
    DashboardComponent,
    CovidStatsComponent,
    StateDetailsComponent,
  ]
})
export class DashboardModule {
 }
