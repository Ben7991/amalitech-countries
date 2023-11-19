import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/shared/types/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() country: Country | undefined;
  url: string = "";

  ngOnInit(): void {
    this.createUrl();
  }

  private createUrl() {
    if (this.country === undefined)
      return;

    let countryname = this.country.commonName.toLowerCase();
    this.url = countryname.replaceAll(" ", "-");
  }
}
