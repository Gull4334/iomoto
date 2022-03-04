import { ActionType } from "../action-types"
import { actionMapper, myStore } from "../actions/actions";
import { Dispatch } from "redux";

export const AllCountiesList = (storeObject: myStore) => {
    return (dispatch:Dispatch<actionMapper>) => {
        dispatch({
            type: ActionType.ALLCOUNTRIES,
            payload: storeObject
        })
    }
}


export const UpdateCountiesList = (storeObject: myStore) => {
    return (dispatch:Dispatch<actionMapper>) => {
        dispatch({
            type: ActionType.PAGINATIONCOUNTRIES,
            payload: storeObject
        })
    }
}
