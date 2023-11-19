import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCurrency'
})
export class CountryCurrencyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    if (value === undefined)
      return "";

    let currencies = <any[]>Object.values(value)
    let output = "";

    for(let i = 0; i < currencies.length; i++) {
      if (i === currencies.length - 1)
        output += currencies[i].name;
      else
        output += currencies[i].name + ", "
    }

    return output;
  }

}
