import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CountryCurrencyPipe } from "./country-currency.pipe";
import { CountryDetailComponent } from "./country-detail.component";
import { CountryLanguagesPipe } from "./country-languages.pipe";
import { NativeCountryNamePipe } from "./native-country-name.pipe";
import { SharedModule } from "src/app/shared/shared.module";

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
  ]
})
export class CountryDetailModule { }
