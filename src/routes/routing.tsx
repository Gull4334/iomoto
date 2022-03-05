import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteImports from "./routingImports";

const Routing = () => {
return(
  <Suspense fallback={"loading..."}>
    <BrowserRouter>
        <RouteImports.Header/>
        <Routes>
          <Route path="/" element={<RouteImports.Home/>} />
          <Route path="/countries" element={<RouteImports.CountriesList/>} />
        </Routes>
      </BrowserRouter>
      </Suspense>
)
}

export default Routing;