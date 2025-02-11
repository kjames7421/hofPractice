// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var fives = [];
  _.each(numbers, function(numbers, index, collection) {
    if (numbers % 5 === 0) {
      fives.push(numbers);
    }
  });
  return fives.length;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var output = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  } );
  return output;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var output = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
  return output;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var output = _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });
  return output;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce (products, function (memo, currentProduct) {
    return memo + (Number(currentProduct.price.replace('$', '')));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  return _.reduce(desserts, function(memo, currentDessert) {
    //
    if (memo[currentDessert.type] === undefined) {
      memo[currentDessert.type] = 1;
    } else {
      memo[currentDessert.type]++;
    }
    return memo;
  }, {});

};

// var dessertCategories = function(desserts) {
//   //var counter = 0;
//   var dessertCount = {};
//   //console.log(desserts);
//   return _.reduce(desserts, function(memo, currentDessert) {
//     if (memo.currentDessert.type > 0) {
//       //return {currentDessert.type: (memo + 1)};
//       memo.currentDessert.type++;
//     } else {
//       memo.currentDessert.type = 1;
//     }
//     //console.log('currentDessertType: ' + currentDessert.type);
//     return memo;
//   }, {});
// };

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  return _.reduce(movies, function(memo, currentMovie) {
    //check movies between 1990 and 2000 in memo
    if (currentMovie.releaseYear >= 1990 && currentMovie.releaseYear <= 2000) {
      //push movie to memo if it is between range
      memo.push(currentMovie.title);
    }
    //return memo
    return memo;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  //use reduce to go through list and update starting position
  //set memoizer to false as starting position
  return _.reduce(movies, function(memo, currentMovie) {
    //check whether movie's runtime is shorter than timeLimit
    if (currentMovie.runtime < timeLimit) {
      //if such a movie exists update memo to true and return it
      return memo = true;
    }
  //if reduce completes traversing then there must be no movie shorter than timeLimit
    //in that case return memo/false
    return memo;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
//use map to traverse fruits object
  //transform each fruit to uppercase
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(aFruit) {
    return aFruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.

//use map to traverse desserts array
  //at each dessert object check for flour within ingredients array
    //create a new glutenFree property set to the boolean result of whether flour
    //is contained within ingredients array

var glutenFree = function(desserts) {
  //console.log(desserts);
  _.map(desserts, function(currentDessert) {
    if (currentDessert.ingredients.indexOf('flour') === -1) {
      var isFree = true;
    } else {
      var isFree = false;
    }
    return currentDessert.glutenFree = isFree;
  });
  return desserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/

//use _.map to traverse gorceries array
  //subtract coupon from each grocery item's price
  //round the new price rounded to 2places (read articles on rounding)
  //add the new price to the grocery item with a propertyname of salePrice

var applyCoupon = function(groceries, coupon) {
  _.map(groceries, function(currentGrocery) {
    var currentPrice = Number(currentGrocery.price.replace('$', '')) * 100;
    var newPrice = '$' + ((currentPrice * (1 - coupon)) / 100).toFixed(2).toString();
    return currentGrocery.salePrice = newPrice;
  });
  return groceries;
};
