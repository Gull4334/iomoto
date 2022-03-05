import { ICountry } from "./CountriesResponses";

export interface actionMapper {
  type: string;
  payload: countriesGlobalStore;
}

export interface countriesGlobalStore {
  countries: ICountry[];
  searchedCountries: ICountry[];
  searchKeyword: string;
  paginatedCountries: ICountry[];
  limit: number;
  page: number;
}
