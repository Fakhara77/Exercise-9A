//Q14:se filter to filter out country start with 'E';
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const countryNameStart = countries.filter((countryName) =>
countryName.startsWith("E")
);

console.log(countryNameStart);