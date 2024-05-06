// index.js - Anon and Call back Functions
// Author: Jorge L. Garcia
// Date:05/06/2024

function isEven(x) {
  return (x % 2 == 0);
}
// test function
console.log("is 1 even? ", isEven(1));
console.log("is 2 even? ", isEven(2));

array = [6, 7, 8, 3, 1]
console.log("my array", array);

var results = array.map(isEven);
//should return [true, false, true, false, false]
console.log("test of evenness of array:", results)

var results = array.map(function(x){ 
  return x ** 2;
})
//should return [36, 49, 64, 9, 1]

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
