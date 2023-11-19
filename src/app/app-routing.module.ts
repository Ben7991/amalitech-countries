import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from './pages/countries/countries.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { fetchCountriesResolver } from './pages/country-detail/fetch-countries.resolver';

const routes: Routes = [
  { path: "", component: CountriesComponent },
  { path: "details/:id", component: CountryDetailComponent, resolve: {data: fetchCountriesResolver} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
