import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength',
  pure: true
  // pure: false/true  // default is true
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}
