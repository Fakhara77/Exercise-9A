//Q6:Use map to create a new array by changing each country to uppercase in the countries array.
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const newArr = countries.map((country) => country.toUpperCase());
console.log(newArr);