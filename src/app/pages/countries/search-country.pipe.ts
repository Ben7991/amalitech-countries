import { Pipe, PipeTransform } from '@angular/core';
import { Country } from 'src/app/shared/types/country';

@Pipe({
  name: 'searchCountry'
})
export class SearchCountryPipe implements PipeTransform {

  transform(value: Country[], search: string): Country[] {
    if (search === "")
      return value;

    const searchedCountries: Country[] = [];

    for(let item of value) {
      if (item.commonName.includes(search))
        searchedCountries.push(item);
    }

    return searchedCountries;
  }

}
