export interface ICountryName {
  common: string;
  official: string;
}
export interface ICountry {
  name: ICountryName;
  capital: [];
  cca2: string;
}