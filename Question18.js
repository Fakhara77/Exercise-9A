 //Q18:Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries;
 const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
 const concat = countries.reduce((acc, cur) => acc + cur);
 console.log(concat, ":are north European countries");