 // Q12:Use filter to filter out countries having six character.
 const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
 const filterCountryName = countries.filter(
    (countryName) => (countryName.length = 6)
  );

  console.log(filterCountryName);