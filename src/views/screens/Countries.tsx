import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator, State } from "../../state";
import { ICountry } from "../../models/CountriesResponses";
import { bindActionCreators } from "redux";
import Pagination from "react-js-pagination";
import { useTranslation } from "react-i18next";
import { countriesGlobalStore } from "../../models/GlobalStoreCountriesResponses";

const Countries = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const countriesGlobalState = useSelector((state: State) => state.user);
  const countriesList: ICountry[] = countriesGlobalState.paginatedCountries;
  const countriesCount: number = countriesGlobalState.searchedCountries.length;
  const countriesSearchKeyWord: string = countriesGlobalState.searchKeyword;
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(countriesSearchKeyWord);
  const { UpdateCountiesList } = bindActionCreators(actionCreator, dispatch);

  useEffect(() => {
    const stateObject: countriesGlobalStore = {
      ...countriesGlobalState,
      searchKeyword: search,
      limit: limit,
      page: page,
    };
    UpdateCountiesList(stateObject);
  }, [page, search]);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="container-area">
        <div className="form-group">
          <label>{t("searchCountry")}</label>
          <input
            className="form-control"
            type="text"
            value={search}
            placeholder={t("searchCountry")}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
              setPage(1);
            }}
          />
        </div>
        <div className="row">
          <div className="col box-padding">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>{t("countryName")}</th>
                  <th>Alpha Code</th>
                  <th>{t("countryCapital")}</th>
                </tr>
                {countriesList.map((country, countryIndex) => (
                  <tr key={countryIndex}>
                    <td>{country.name.common}</td>
                    <td>{country.cca2}</td>
                    <td>{country.capital}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          activePage={page}
          itemsCountPerPage={limit}
          totalItemsCount={countriesCount}
          pageRangeDisplayed={5}
          onChange={(e) => handlePageChange(e)}
        />
      </div>
    </div>
  );
};

export default Countries;
