import { ActionType } from "../action-types";
import { actionMapper, countriesGlobalStore } from "../../models/GlobalStoreCountriesResponses";
import { Dispatch } from "redux";

export const AllCountiesList = (storeObject: countriesGlobalStore) => {
  return (dispatch: Dispatch<actionMapper>) => {
    dispatch({
      type: ActionType.ALLCOUNTRIES,
      payload: storeObject,
    });
  };
};

export const UpdateCountiesList = (storeObject: countriesGlobalStore) => {
  return (dispatch: Dispatch<actionMapper>) => {
    dispatch({
      type: ActionType.PAGINATIONCOUNTRIES,
      payload: storeObject,
    });
  };
};
