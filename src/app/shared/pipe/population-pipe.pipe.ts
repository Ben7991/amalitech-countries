import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'populationPipe'
})
export class PopulationPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toLocaleString("en-GB");
  }

}
