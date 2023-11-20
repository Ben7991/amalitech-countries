import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CountryCurrencyPipe } from "./country-currency.pipe";
import { CountryDetailComponent } from "./country-detail.component";
import { CountryLanguagesPipe } from "./country-languages.pipe";
import { NativeCountryNamePipe } from "./native-country-name.pipe";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { fetchCountriesResolver } from "./fetch-countries.resolver";

const appRoutes: Routes = [
  { path: "", component: CountryDetailComponent, resolve: {data: fetchCountriesResolver} },
]

@NgModule({
  declarations: [
    CountryDetailComponent,
    NativeCountryNamePipe,
    CountryCurrencyPipe,
    CountryLanguagesPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CountryDetailModule { }
