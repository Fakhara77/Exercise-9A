 //Q24:Use findIndex to find the position of the first country containing only six letters in the countries array
 const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
 const findIndexCountries = countries.findIndex(
    (country) => country.length === 6
  );
  console.log(findIndexCountries);