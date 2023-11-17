import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from './pages/countries/countries.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';

const routes: Routes = [
  { path: "", component: CountriesComponent },
  { path: "detail", component: CountryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
