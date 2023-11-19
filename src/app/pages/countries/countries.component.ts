import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/shared/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  searchedCountry = "";
  selectedFilter = "";
  filters = ["Filter By Region", "Africa", "America", "Asia", "Europe", "Oceania"];
  constructor(private countriesServices: CountriesService) { }

  ngOnInit(): void {
    this.countriesServices.loadCountries();
  }
}
