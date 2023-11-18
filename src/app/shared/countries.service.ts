import { Injectable } from '@angular/core';
import { Country } from './types/country';
import { HttpClient } from '@angular/common/http';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countries: Country[] = [];
  countriesChanged = new Subject<Country[]>();

  constructor(private http: HttpClient) { }

  public loadCountries() {
    this.http.get<Country[]>("https://restcountries.com/v3.1/all")
      .pipe(
        map((countries: any[]) => {
          let formattedCountries: Country[] = [];
          countries.forEach(country => {
            formattedCountries.push({
              commonName: country.name.common,
              flag: country.flags.svg,
              capital: country.capital,
              region: country.region,
              population: country.population,
              borderCountries: country.borders,
              subRegion: country.subregion,
              topLevelDomain: country.tld,
              continent: country.continents[0]
            })
          })

          return formattedCountries.sort((a: Country, b: Country) => {
            var firstCountry: string = a.commonName;
            var secondCountry: string = b.commonName;
            if (firstCountry < secondCountry) return -1;
            if (firstCountry > secondCountry) return 1;
            return 0;
          });
        }),
      )
      .subscribe(countries => {
        this.countries.push(...countries);
        this.countriesChanged.next(countries);
        console.log(countries);
      })
  }

  public get countryList() {
    return this.countries.slice();
  }

  public findCountryById(id: string): Country | undefined {
    return this.countries.find(country => country.commonName === id);
  }
}
