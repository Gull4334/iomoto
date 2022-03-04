import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator, State } from '../state';
import { ICountry } from '../components/Common';
import { bindActionCreators } from 'redux';
import { myStore } from '../state/actions/actions';
import Pagination from "react-js-pagination";
import { useTranslation } from "react-i18next";

const Countries = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const myReduxState = useSelector((state: State) => state.user);
    const countriesList: ICountry[] = myReduxState.paginatedCountries;
    const countriesCount: number = myReduxState.searchedCountries.length;
    const countriesSearchKeyWord: string = myReduxState.searchKeyword;
    const { UpdateCountiesList } = bindActionCreators(actionCreator, dispatch);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState(countriesSearchKeyWord);

    useEffect(() => {
        fetchCountires();
    }, [page, search]);

    const fetchCountires = () => {
        let stateObject: myStore = {
            ...myReduxState,
            searchKeyword: search,
            limit: limit,
            page: page
        }
        UpdateCountiesList(stateObject);
    }

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
    }

    return (
            <div className="container countires-area">                
                <div className='form-group'>
                <label>{t('searchCountry')}</label>
                    <input 
                    className='form-control' 
                    type='text' 
                    value={search}
                    placeholder={t('searchCountry')}
                    onChange={(e) => {
                        setSearch(e.currentTarget.value);
                        setPage(1);
                    }}
                     />
                </div>
                <div>
                    <table className="table table-striped">
                        <tbody><tr>
                            <th>{t('countryName')}</th>
                            <th>Alpha Code</th>
                            <th>{t('countryCapital')}</th>
                        </tr>
                            {countriesList.map((country, countryIndex) => (
                                <tr key={countryIndex}>
                                    <td>{country.name.common}</td>
                                    <td>{country.cca2}</td>
                                    <td>{country.capital}</td>
                                </tr>
                            ))}
                        </tbody></table>
                </div>
                <Pagination
                activePage={page}
                itemsCountPerPage={limit}
                totalItemsCount={countriesCount}
                pageRangeDisplayed={5}
                onChange={(e) => handlePageChange(e)}
            />
            </div>
       );
}

export default Countries;