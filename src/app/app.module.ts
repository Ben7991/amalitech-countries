import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { ThemeControllerComponent } from './components/theme-controller/theme-controller.component';
import { CountryListComponent } from './pages/countries/country-list/country-list.component';
import { CountryComponent } from './pages/countries/country-list/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    CountriesComponent,
    CountryDetailComponent,
    ThemeControllerComponent,
    CountryListComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
