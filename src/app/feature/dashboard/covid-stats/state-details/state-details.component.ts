import { ToastrService } from 'ngx-toastr';
import { CovidStatsService } from '@app/core/services/dashboard/covid-stats.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DistrictStats } from '@app/shared/models/covid-stats-model';
import { AppConstants } from '@app/shared/constants/app-constants';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css']
})
export class StateDetailsComponent implements OnInit, OnChanges {

  @Input() currentState: string;
  currentStateDistrictData: any;
  selectedStateDistrictStats: DistrictStats[] = [];

  cols = [
    { field: 'district', header: 'District' },
    { field: 'confirmed', header: 'Confirmed' },
    { field: 'deceased', header: 'Deceased' },
    { field: 'active', header: 'Active' },
    { field: 'recovered', header: 'Recovered' }
  ];

  constructor(private covidStatsService: CovidStatsService, private toastrService: ToastrService) { }

  ngOnInit(): void {}

  ngOnChanges() {
    this.covidStatsService.getStateDistrictStats().subscribe(data => {
      this.currentStateDistrictData = data[this.currentState].districtData;
      const json = JSON.stringify(this.currentStateDistrictData);
      const districts = Object.keys(this.currentStateDistrictData);
      for (const key of districts) {
        if (this.currentStateDistrictData.hasOwnProperty(key)) {
          const currentDistrict = this.currentStateDistrictData[key];
          currentDistrict.district = key;
          this.selectedStateDistrictStats.push(currentDistrict);
        }
      }
    }, error => this.toastrService.error('Failed to fetch district details', AppConstants.APP_NAME));
  }
}
