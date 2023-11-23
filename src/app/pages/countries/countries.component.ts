import { Component, DoCheck, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/shared/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements DoCheck, OnInit {
  searchedCountry = "";
  selectedFilter = "Filter By Region";
  filters = ["Filter By Region", "Africa", "America", "Asia", "Europe", "Oceania"];

  constructor(private countriesServices: CountriesService) { }

  ngOnInit(): void {
    this.searchedCountry = localStorage.getItem("search-term") ? localStorage.getItem("search-term")! : "";
    this.selectedFilter = localStorage.getItem("filter-term") ? localStorage.getItem("filter-term")! : "Filter By Region";
  }

  ngDoCheck(): void {
    localStorage.setItem("search-term", this.searchedCountry);
    localStorage.setItem("filter-term", this.selectedFilter);
  }

}
