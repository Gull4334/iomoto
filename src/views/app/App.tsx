import "../../Style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator, State } from "../../state";
import { useEffect } from "react";
import { getAllCountries } from "../../apis/CountriesApi";
import { paginateList } from "../../utils/Common";
import { countriesGlobalStore } from "../../models/GlobalStoreCountriesResponses";
import Routing from "../../routes/routing";
import { ICountry } from "../../models/CountriesResponses";

function App() {
  const dispatch = useDispatch();
  const { AllCountiesList } = bindActionCreators(actionCreator, dispatch);
  const countriesGlobalState = useSelector((state: State) => state.user);

  useEffect(() => {

    getAllCountries().then((result:ICountry[]) => {
      let stateObject: countriesGlobalStore = {
        ...countriesGlobalState,
        countries: result,
        searchedCountries: result,
        paginatedCountries: paginateList(1, 10, result),
      };
      AllCountiesList(stateObject);
    }).catch((err) => console.log(err));

  }, []);
  return (
    <div className="App">
      <Routing/>
    </div>
  );
}

export default App;
