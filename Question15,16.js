 //Q15:Use filter to filter out only prices with values.
 const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
  ];
      const newProduct=products.filter((key)=>key.key[value]);
            console.log(newProduct);
             //Q16:Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

      function getStringLists(array) {
        return array.map(function (element) {
          element.toString;
        });
      }

      console.log(
        getStringLists(
          "milk",
          23,
          { name: "umer", age: 23 },
          "hassan",
          3.14,
          "butter",
          "biscuits"
        )
      );