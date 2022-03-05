import { ICountry } from "../models/CountriesResponses";

export const paginateList = (page: number, limit: number, list: ICountry[]) => {
  const startIndex = page * limit - limit;
  const endIndex = startIndex + limit;
  const filteredList = list.slice(startIndex, endIndex);
  return filteredList;
};
