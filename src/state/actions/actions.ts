import { ICountry } from "../../components/Common";

export interface actionMapper {
    type: string,
    payload: myStore
}

export interface myStore {
    countries: ICountry[],
    searchedCountries: ICountry[],
    searchKeyword: string,
    paginatedCountries: ICountry[],
    limit: number,
    page: number
}