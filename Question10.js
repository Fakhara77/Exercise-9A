 //Q10:Use map to map the products array to its corresponding prices.
 const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
  ];
 const newproduct = products.map((product) => product.price);
 console.log(newproduct);