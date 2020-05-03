import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CovidStats } from '@app/shared/models/covid-stats-model';
import { CovidStatsService } from '@app/core/services/dashboard/covid-stats.service';

@Component({
    selector: 'app-covid-stats',
    templateUrl: './covid-stats.component.html',
    styleUrls: ['./covid-stats.component.css'],
    animations: [
        trigger('rowExpansionTrigger', [
            state('void', style({
                transform: 'translateX(-10%)',
                opacity: 0
            })),
            state('active', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class CovidStatsComponent implements OnInit {

    cols = [
        { field: 'state', header: 'State' },
        { field: 'confirmed', header: 'Confirmed' },
        { field: 'recovered', header: 'Recovered' },
        { field: 'deaths', header: 'Deceased' },
        { field: 'active', header: 'Active' }
    ];

    constructor() { }

    @Input() covidStats: CovidStats;

    ngOnInit(): void {}


}
