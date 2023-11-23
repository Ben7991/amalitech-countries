import { Pipe, PipeTransform } from '@angular/core';
import { Country } from 'src/app/shared/types/country';

@Pipe({
  name: 'searchCountry'
})
export class SearchCountryPipe implements PipeTransform {

  transform(value: Country[], search: string): Country[] {
    if (search === "")
      return value;

      let searchTerm = search.toLowerCase();
    const searchedCountries: Country[] = [];

    for(let item of value) {
      let lowerCommonName = item.commonName.toLowerCase();
      if (lowerCommonName.includes(searchTerm))
        searchedCountries.push(item);
    }

    return searchedCountries;
  }

}
