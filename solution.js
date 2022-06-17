"use strict";
/**
 * 01
 * Your app is accepting an object as the one named "recipe" just after the exercise description.
 * This object contains details for a cooking recipe.
 *
 * a) Create a function that accepts such an object and returns an array of the ingredients that object contains
 * b) Create another similar function that returns an array of the quantities of each ingredient
 * c) Create a function that accepts an array of ingredients and an array of quantities and prints a list in the form of:
 * ingredient - quantity
 *
 * N.B. data come from here: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52818
 */
console.log("------------02--------------");
const recipe = {
  idMeal: "52818",
  strMeal: "Chicken Fajita Mac and Cheese",
  strDrinkAlternate: null,
  strCategory: "Chicken",
  strArea: "American",
  strInstructions:
    "Fry your onion, peppers and garlic in olive oil until nicely translucent. Make a well in your veg and add your chicken. Add your seasoning and salt. Allow to colour slightly.\r\nAdd your cream, stock and macaroni.\r\nCook on low for 20 minutes. Add your cheeses, stir to combine.\r\nTop with roasted peppers and parsley.",
  strMealThumb:
    "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
  strTags: "Pasta,Cheasy,Meat",
  strYoutube: "https://www.youtube.com/watch?v=bwTSmLTZKNg",
  strIngredient1: "macaroni",
  strIngredient2: "chicken stock",
  strIngredient3: "heavy cream",
  strIngredient4: "fajita seasoning",
  strIngredient5: "salt",
  strIngredient6: "chicken breast",
  strIngredient7: "olive oil",
  strIngredient8: "onion",
  strIngredient9: "red pepper",
  strIngredient10: "garlic",
  strIngredient11: "cheddar cheese",
  strIngredient12: "parsley",
  strIngredient13: "",
  strIngredient14: "",
  strIngredient15: "",
  strIngredient16: "",
  strIngredient17: "",
  strIngredient18: "",
  strIngredient19: "",
  strIngredient20: "",
  strMeasure1: "500g",
  strMeasure2: "2 cups",
  strMeasure3: "1/2 cup",
  strMeasure4: "1 packet",
  strMeasure5: "1 tsp",
  strMeasure6: "3 diced",
  strMeasure7: "2 tbsp",
  strMeasure8: "1 small finely diced",
  strMeasure9: "2 finely diced",
  strMeasure10: "2 cloves minced",
  strMeasure11: "1 cup",
  strMeasure12: "garnish chopped",
  strMeasure13: "",
  strMeasure14: "",
  strMeasure15: "",
  strMeasure16: "",
  strMeasure17: "",
  strMeasure18: "",
  strMeasure19: "",
  strMeasure20: "",
  strSource: "http://twistedfood.co.uk/chicken-fajita-mac-n-cheese/",
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,
};

// a)
function getIngredients(object) {
  const ingredients = []; // create an array that will hold the ingredients

  const localRecipe = Object.entries(object); // create an array that contains all key and all values

  // find the object properties that are ingredients
  for (let i = 0; i < localRecipe.length; i++) {
    // check if object property contains the 'strIngredient' string and also check if the value is not empty
    if (
      localRecipe[i][0].includes("strIngredient") &&
      localRecipe[i][1].length
    ) {
      ingredients.push(localRecipe[i][1]);
    }
  }

  return ingredients;
}
console.log(getIngredients(recipe));
// b)
function getQuantities(object) {
  const quantities = []; // create an array that will hold the ingredients

  const localRecipe = Object.entries(object); // create an array that contains all key and all values

  // find the object properties that are ingredients
  for (let i = 0; i < localRecipe.length; i++) {
    // check if object property contains the 'strIngredient' string and also check if the value is not empty
    if (localRecipe[i][0].includes("strMeasure") && localRecipe[i][1].length) {
      quantities.push(localRecipe[i][1]);
    }
  }

  return quantities;
}
console.log(getQuantities(recipe));

// c)
function printRecipe(ingredients, quantities) {
  for (let i = 0; i < ingredients.length; i++) {
    console.log(`${ingredients[i]} - ${quantities[i]}`);
  }
}
 printRecipe(getIngredients(recipe), getQuantities(recipe));

/**
 * 03
 * Marketing department asked you to add multiple currencies to your current eshop.
 * All products are stored in arrays of objects and each object includes a property price.
 * Create a function that depending on the input renders all products prices
 * with a given currency symbol at the left or at the right side of the price.
 *
 * The output should be like this:
 *
 * "D3 5000 iu - $10"
 *
 * or like this:
 *
 * "D3 5000 iu - 10€"
 */
// Data
const products = [
  {
    // 1
    id: 1,
    name: "D3 5000 iu",
    description: "Takes care of your immune system",
    price: 10,
    image: "http://example.com/1",
  },
  {
    // 2
    id: 2,
    name: "C 1000mg",
    description: "180 tabs of vitamin C with Bioflanoids",
    price: 3,
    image: "http://example.com/23",
  },
  {
    // 3
    id: 3,
    name: "B - Complex 50 mg",
    description: "Balanced mix of all basic B vitamins",
    price: 12,
    image: "http://example.com/44",
  },
  {
    // 4
    id: 4,
    name: "Cal-Mag",
    description: "Calcium and Magnesium in the proper analogy",
    price: 15,
    image: "http://example.com/123",
  },
  {
    // 5
    id: 5,
    name: "E 400iu",
    description: "Best for skin issues",
    price: 10,
    image: "http://example.com/456",
  },
];

console.log("------------03-Method-1--------------");
function printPrices(object, str) {
  for (const product of object) {
    if (str === "$") console.log(`${product.name} - ${str}${product.price}`);
    if (str === "€") console.log(`${product.name} -${product.price}${str}`);
  }
}

printPrices(products, "$");
console.log(`-----------`);
printPrices(products, "€");

console.log("------------03-Method-2--------------");

function printPrices2(side, currency) {
  for (const product of products) {
    // console.log('Product is', product)
    if (side === "left") {
      console.log(`${product.name} - ${currency}${product.price}`);
    } else {
      console.log(`${product.name} - ${product.price}${currency}`);
    }
  }
}

printPrices2("left", "$"); //D3 5000 iu - $10
console.log("----------");
printPrices2("right", "€");

/**
 * 04
 * Your eshop now support reviews and ratings from users but currently
 * they are not showing at products cards and pages.
 * Your next task is to create a function that renders how many ratings a product has along with its average rating.
 *
 * Render all products with their ratings
 *
 * The output should be like that:
 *
 * "D3 5000 iu - 10 ratings 4.5 average"
 * "C 1000mg - 20 ratings 3.9 average"
 *
 * Use products array from previous exercises along with ratings array below
 *
 * Bonus after completing main task:
 * Some data in the ratings are corrupted. A rating can be between 1 and 5
 * so your function should not count such ratings
 */

const ratings = [
  {
    // 1
    id: 1,
    ratings: [1, 5, 3, 5, 5, 4, 4, 5, 5, 2],
  },
  {
    // 2
    id: 2,
    ratings: [1, 5, 3, 5, 5, 4, 4, 5, 5, 2, 1, 5, 3, 5, 5, 4, 4, 5, 5, 2],
  },
  {
    // 3
    id: 3,
    ratings: [1, 1, 3, 5, 5, 4, 4, 5, 2, 1, 5, 3, 5, 5, 4, 8, 5, 1, 2],
  },
  {
    // 4
    id: 4,
    ratings: [1, 5, 5, 5, 5, 4, 4, 5, 5, 5, 5, 5, 5, 5, 4, 4, 5, 5, 5, 7, 0],
  },
  {
    // 5
    id: 5,
    ratings: [
      1, 5, 5, 5, 5, 4, 4, 5, 6, 5, 5, 5, 5, 5, 4, 4, 5, 5, 5, 7, 0, 1, 2, 3, 4,
      5, 9, 1, 7,
    ],
  },
];

console.log("------------04--------------");

function printRatings() {
  for (let product of ratings) {
    console.log(
      `${getProductName(product.id)} - ${
        product.ratings.length
      } ratings - ${calcAverage(product.ratings)} average`
    );
  }
}

// searches prodcuts array and returns the product name
function getProductName(id) {
  for (let product of products) {
    if (product.id === id) return product.name;
  }
}

function calcAverage(array) {
  return (calcSum(array) / array.length).toFixed(1);
}

function calcSum(array) {
  let total = 0;

  for (let item of array) {
    total += item;
  }

  return total;
}

printRatings();
