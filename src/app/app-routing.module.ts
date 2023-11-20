import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from './pages/countries/countries.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { fetchCountriesResolver } from './pages/country-detail/fetch-countries.resolver';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", component: CountriesComponent },
  { path: "details/:id", component: CountryDetailComponent, resolve: {data: fetchCountriesResolver} },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
