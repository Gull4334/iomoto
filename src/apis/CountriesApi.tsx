export const getAllCountries = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}all`);
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
