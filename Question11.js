//Q11:Use filter to filter out countries containing land
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const filterCountries = countries.filter((country) =>
country.includes("land")
);
console.log(filterCountries);