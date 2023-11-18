import { Pipe, PipeTransform } from '@angular/core';
import { Country } from 'src/app/shared/types/country';

@Pipe({
  name: 'filterCountries'
})
export class FilterCountriesPipe implements PipeTransform {

  transform(value: Country[], filterString: string): Country[] {
    if (filterString === "no-value" || value.length === 0)
      return value;

    const filteredCountries: Country[] = [];

    for (let item of value) {
      if (item.continent === filterString)
        filteredCountries.push(item);
    }

    return filteredCountries;
  }

}
