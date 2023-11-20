import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { ThemeControllerComponent } from './components/theme-controller/theme-controller.component';
import { CountryListComponent } from './pages/countries/country-list/country-list.component';
import { CountryComponent } from './pages/countries/country-list/country/country.component';
import { PopulationPipe } from './shared/pipe/population.pipe';
import { FilterCountriesPipe } from './pages/countries/filter-countries.pipe';
import { SearchCountryPipe } from './pages/countries/search-country.pipe';
import { NativeCountryNamePipe } from './pages/country-detail/native-country-name.pipe';
import { CountryCurrencyPipe } from './pages/country-detail/country-currency.pipe';
import { CountryLanguagesPipe } from './pages/country-detail/country-languages.pipe';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    CountriesComponent,
    CountryDetailComponent,
    ThemeControllerComponent,
    CountryListComponent,
    CountryComponent,
    PopulationPipe,
    FilterCountriesPipe,
    SearchCountryPipe,
    NativeCountryNamePipe,
    CountryCurrencyPipe,
    CountryLanguagesPipe,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
