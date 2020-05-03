import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'tabDisplay'})
export class TabTextTransform implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
