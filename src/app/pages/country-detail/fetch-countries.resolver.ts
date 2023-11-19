import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CountriesService } from 'src/app/shared/countries.service';

export const fetchCountriesResolver: ResolveFn<any> = (route, state) => {
  let countriesService = inject(CountriesService);

  if (countriesService.countries.length > 0)
    return countriesService.countries;

  return countriesService.loadCountries();
};
