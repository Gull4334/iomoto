import Home from './screens/Home';
import Countries from './screens/Countries';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './Style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// require("bootstrap/less/bootstrap.less");
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import {actionCreator, State } from './state';
import { useEffect } from "react";
import { getAllCountries } from './apis/Common';
import { myStore } from './state/actions/actions';
import { paginateList } from './utils/Common';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
    const { AllCountiesList } = bindActionCreators(actionCreator, dispatch);
    const myReduxState = useSelector((state:State) => state.user);

    useEffect(() => {
        getAllCountries().then((response) => {
            response.json().then((result) => {
                let stateObject: myStore = {
                    ...myReduxState,
                    countries: result,
                    searchedCountries: result,
                    paginatedCountries: paginateList(1,10, result)
                }
                AllCountiesList(stateObject);
            }).catch((error)=> {
                alert(error);
            })
        }).catch((error)=>{
            alert(error);
        });
    }, [])
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
