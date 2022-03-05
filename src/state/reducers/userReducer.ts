import { ICountry } from "../../models/CountriesResponses";
import { paginateList } from "../../utils/Common";
import { ActionType } from "../action-types";
import { countriesGlobalStore, actionMapper } from "../../models/GlobalStoreCountriesResponses";

const apiData: ICountry[] = [];

const initialState: countriesGlobalStore = {
  countries: apiData,
  paginatedCountries: [],
  searchedCountries: [],
  searchKeyword: "",
  limit: 10,
  page: 1,
};

const userReducer = (state = initialState, action: actionMapper) => {
  switch (action.type) {
    case ActionType.ALLCOUNTRIES: {
      return action.payload;
    }
    case ActionType.PAGINATIONCOUNTRIES: {
      let { limit, page, countries, searchKeyword } = action.payload;
      let searchedCountriesList: ICountry[] = [];
      if (searchKeyword) {
        countries.forEach((element) => {
          if (
            element.name.common
              .toLocaleLowerCase()
              .includes(searchKeyword.toLocaleLowerCase()) ||
            element.cca2
              .toLocaleLowerCase()
              .includes(searchKeyword.toLocaleLowerCase())
          ) {
            searchedCountriesList.push(element);
          }
        });
      }
      if (searchedCountriesList.length === 0) {
        searchedCountriesList = countries;
      }
      let allCountries = {
        ...state,
        searchKeyword: searchKeyword,
        searchedCountries: searchedCountriesList,
        paginatedCountries: paginateList(page, limit, searchedCountriesList),
      };
      return allCountries;
    }
    default:
      return state;
  }
};

export default userReducer;
