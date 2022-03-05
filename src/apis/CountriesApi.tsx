export const getAllCountries = () => {
  return fetch(process.env.REACT_APP_BASEURL + "all")
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
