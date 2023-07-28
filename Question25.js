 //Q25:Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
 const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
 const CountriesPossition = countries.findIndex(
    (country) => country === "Norway"
  );
  console.log(CountriesPossition);