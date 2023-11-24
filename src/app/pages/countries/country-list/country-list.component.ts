import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { CountriesService } from 'src/app/shared/countries.service';
import { Country } from 'src/app/shared/types/country';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit, OnDestroy {
  @Input() filter = '';
  @Input() searchTerm = '';
  countries: Country[] = [];
  subscription: Subscription | undefined;
  error = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.subscription = this.countriesService.loadCountries().subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (error) => {
        this.error = error;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
