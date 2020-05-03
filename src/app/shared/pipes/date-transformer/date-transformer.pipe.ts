import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment';
import { AppConstants } from '@app/shared/constants/app-constants';

@Pipe({ name: 'DateTransformer' })
export class DateTransformer implements PipeTransform {
    transform(value: string): string {
        return moment(value).format(AppConstants.NEWS_DATE_FORMAT);
    }
}
