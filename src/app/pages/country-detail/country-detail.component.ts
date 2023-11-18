import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/shared/countries.service';
import { Country } from 'src/app/shared/types/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country: Country | undefined;

  constructor(private activateRoute: ActivatedRoute,
    private countriesServices: CountriesService) { }

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe(params => {
        this.country = this.countriesServices.findCountryById(params["id"]);
      });
  }
}
