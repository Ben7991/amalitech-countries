import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { CountriesService } from 'src/app/shared/countries.service';
import { Country } from 'src/app/shared/types/country';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit, OnDestroy {
  @Input() filter = "";
  @Input() searchTerm = "";
  countries: Country[] = [];
  subscription: Subscription | undefined;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.subscription = this.countriesService.countriesChanged
      .subscribe((fetchedCountries: Country[]) => {
        this.countries = fetchedCountries.slice()
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
