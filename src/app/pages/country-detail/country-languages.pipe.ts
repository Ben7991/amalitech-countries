import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryLanguages'
})
export class CountryLanguagesPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    let languages = <any[]>Object.values(value);
    let output = "";

    for(let i = 0; i < languages.length; i++) {
      if (i === languages.length - 1)
        output += languages[i];
      else
        output += languages[i] + ", "
    }

    return languages.join(", ");
  }

}
