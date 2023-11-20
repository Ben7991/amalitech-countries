import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { CountriesComponent } from "./countries.component";
import { CountryListComponent } from "./country-list/country-list.component";
import { CountryComponent } from "./country-list/country/country.component";
import { FilterCountriesPipe } from "./filter-countries.pipe";
import { SearchCountryPipe } from "./search-country.pipe";
import { RouterModule } from "@angular/router"
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    CountriesComponent,
    CountryListComponent,
    CountryComponent,
    FilterCountriesPipe,
    SearchCountryPipe,
  ],
  imports: [
    FormsModule,
    RouterModule,
    SharedModule,
    CommonModule
  ]
})
export class CountriesModule { }
