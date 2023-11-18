export interface Country {
  commonName: string;
  continent: string;
  nativeName?: string;
  flag: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string[];
  currencies?: string[];
  languagues?: string[];
  borderCountries: string[];
}
