import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements DoCheck, OnInit {
  searchedCountry = "";
  selectedFilter = "Filter By Region";
  filters = ["Filter By Region", "Africa", "America", "Asia", "Europe", "Oceania"];

  constructor() { }

  ngOnInit(): void {
    this.searchedCountry = sessionStorage.getItem("search-term") ? sessionStorage.getItem("search-term")! : "";
    this.selectedFilter = sessionStorage.getItem("filter-term") ? sessionStorage.getItem("filter-term")! : "Filter By Region";
  }

  ngDoCheck(): void {
    sessionStorage.setItem("search-term", this.searchedCountry);
    sessionStorage.setItem("filter-term", this.selectedFilter);
  }

}
