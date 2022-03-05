import { lazy } from "react";

// screens imports
const Header = lazy(
  () => import("../views/components/Header")
);
const Home = lazy(
  () => import("../views/screens/Home")
);
const CountriesList = lazy(
  () => import("../views/screens/Countries")
);

const RouteImports = {
  Header,
  Home,
  CountriesList,
};

export default RouteImports;
