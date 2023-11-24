import { Injectable } from '@angular/core';
import { Country } from './types/country';
import { HttpClient } from '@angular/common/http';
import { catchError, count, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  countries: Country[] = [];

  constructor(private http: HttpClient) {}

  public set fillCountries(countries: Country[]) {
    this.countries = countries;
  }

  private createCountry(country: any): Country {
    return {
      commonName: country.name.common,
      nativeName: country.name.nativeName,
      flag: country.flags.svg,
      capital: country.capital,
      region: country.region,
      population: country.population,
      borderCountriesFifa: country.borders !== undefined ? country.borders : [],
      subRegion: country.subregion,
      topLevelDomain: country.tld,
      continent: country.continents[0],
      currencies: country.currencies,
      languages: country.languages,
      fifa: country.fifa,
    };
  }

  public loadCountries() {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all').pipe(
      map((countries: any[]) => {
        let formattedCountries: Country[] = [];
        countries.forEach((country) => {
          formattedCountries.push(this.createCountry(country));
        });

        return formattedCountries.sort((a: Country, b: Country) => {
          if (a.commonName < b.commonName) return -1;
          if (a.commonName > b.commonName) return 1;
          return 0;
        });
      }),
      catchError((error) => {
        throw 'Something wrong happened, please try again by refreshing page';
      }),
      tap((countries) => {
        this.countries = countries;
      })
    );
  }

  public findCountryByName(name: string) {
    let splitDetails = name.split('-');
    let newCountryName = '';

    /**
     * due to the slug country name in the url path,
     * I needed to take it (-) away again
     */
    for (let i = 0; i < splitDetails.length; i++) {
      switch (splitDetails[i]) {
        case 'and':
        case 'of':
          newCountryName += splitDetails[i] + ' ';
          break;
        default:
          let length = splitDetails[i].length;
          newCountryName +=
            splitDetails[i].substring(0, 1).toUpperCase() +
            splitDetails[i].substring(1, length) +
            ' ';
      }
    }

    return this.findCountryByNewName(newCountryName);
  }

  private findCountryByNewName(newCountryName: string): Country | undefined {
    let foundCountry;

    foundCountry = this.countries.find((country) =>
      country.commonName.includes(newCountryName.trim())
    );

    if (foundCountry === undefined) return undefined;

    let borderCountries = this.prepareBorderCountries(foundCountry!);
    foundCountry!.borderCountries = [...borderCountries];
    return foundCountry;
  }

  private prepareBorderCountries(country: Country): string[] {
    let mainBorderCountries: string[] = [];

    if (country.borderCountriesFifa.length > 0) {
      for (let borderFifa of country.borderCountriesFifa) {
        for (let country of this.countries) {
          if (country.fifa === borderFifa) {
            mainBorderCountries.push(country.commonName);
          }
        }
      }
    }

    return mainBorderCountries;
  }
}
