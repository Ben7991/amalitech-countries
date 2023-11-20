import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ThemeControllerComponent } from './components/theme-controller/theme-controller.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { CountriesModule } from './pages/countries/countries.module';
import { CountryDetailModule } from './pages/country-detail/country-detail.module';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    ThemeControllerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CountriesModule,
    CountryDetailModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
