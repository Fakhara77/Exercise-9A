//Q23:Use find to find the first country containing only six letters in the countries array
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const findCountry = countries.find((country) => country.length === 6);

console.log(findCountry);