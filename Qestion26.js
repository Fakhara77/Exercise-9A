 //Q26:Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
 const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
 const Countries = countries.findIndex((country) => country === "Russia");
 console.log(Countries);