// index.js - Arrays and Objects
// Author: Jorge L. Garcia
// Date: 05/01/24

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

// Define Variables
myTransport = ['ebike', 'loop bus', 'city bus', 'walking']

//create an object for my main ride
let myMainRide = {
  make: "loop bus",
  model: "25 foot Automatic",
  color: "white",
  year: 1992,
  age: function() {
      return currentYear - this.year;
  }
}

//output
document.writeln("kinds of transportation I use: ", myTransport,"</br>");
//this little trick allos us to write an object to the document
document.writeln("My Main Ride: <pre>"
  JSON.stringify(myMainRide, null, '/t'), "</pre>");
  
