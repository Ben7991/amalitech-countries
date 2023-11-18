import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/shared/countries.service';
import { Country } from 'src/app/shared/types/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countries = this.countriesService.countryList;
  }
}
