//Q13:Use filter to filter out countries containing six letters and more in the country array.
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const countryName = countries.filter(
    (countryName) => countryName.length > 6
  );

  console.log(countryName);