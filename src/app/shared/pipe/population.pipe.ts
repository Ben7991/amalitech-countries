import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population'
})
export class PopulationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toLocaleString("en-GB");
  }

}
