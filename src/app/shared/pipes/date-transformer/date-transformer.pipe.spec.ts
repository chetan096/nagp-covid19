import { AppConstants } from '@app/shared/constants/app-constants';
import { TestBed } from '@angular/core/testing';
import { DateTransformer } from '@app/shared/pipes/date-transformer/date-transformer.pipe';

describe('DateTransformerPipe', () => {

  let pipe: DateTransformer;

  beforeEach(() => {
    pipe = new DateTransformer();
  });

  afterEach(() => {
    pipe = null;
  });

  it('should tranform date value to format ' + AppConstants.NEWS_DATE_FORMAT, () => {
    const result = pipe.transform('2020-05-02');
    expect(result).toBe('May 2nd 2020, 12:00:00 am');
  });

  it('should return Invalid date when value is null', () => {
    const result = pipe.transform(null);
    expect(result).toBe('Invalid date');
  });

});
