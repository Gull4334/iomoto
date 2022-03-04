import { ICountry } from "../components/Common";

export const paginateList = (page: number, limit: number, list: ICountry[]) => {
    const startIndex = page * limit - limit;
    const endIndex = startIndex + limit;
    const filteredList = list.slice(startIndex, endIndex);
    return filteredList;
}