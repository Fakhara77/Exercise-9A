//Q21:Use every to check if all the countries contain the word land
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const newCountries = countries.every((country) =>
country.includes("land")
);
console.log(newCountries);