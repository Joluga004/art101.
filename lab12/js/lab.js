// index.js - Anon and Call back Functions
// Author: Jorge L. Garcia
// Date:05/19/2024
// Generates an anagram of a given string.
// credit to ChatGPT

// Function to generate an anagram
function sortingHat(str) {
  // Count the letters in the string
  const length = str.length;

  // Use modulus operator to get the remainder with 4
  const mod = length % 4;

  // Create a conditional to return the corresponding house
  let house;
  if (mod === 0) {
      house = "Gryffindor";
  } else if (mod === 1) {
      house = "Ravenclaw";
  } else if (mod === 2) {
      house = "Slytherin";
  } else if (mod === 3) {
      house = "Hufflepuff";
  }

  return house;
}

// Example usage:
const house = sortingHat("Harry Potter");
console.log(house); // This will print one of the four houses based on the length of "Harry Potter"

// Function to assign a Hogwarts house based on the length of the input string
function sortingHat(str) {
  // Count the letters in the string
  const length = str.length;

  // Use modulus operator to get the remainder with 4
  const mod = length % 4;

  // Create a conditional to return the corresponding house
  let house;
  if (mod === 0) {
      house = "Gryffindor";
  } else if (mod === 1) {
      house = "Ravenclaw";
  } else if (mod === 2) {
      house = "Slytherin";
  } else if (mod === 3) {
      house = "Hufflepuff";
  }

  return house;
}

// Click listener for the button
$("#button").click(function() {
  // Get the value of the input field
  const name = $("#input").val();

  // Run sortingHat(name) and store the result in a variable house
  const house = sortingHat(name);

  // Create a new paragraph element with the result
  const resultParagraph = $('<p class="house-result">The Sorting Hat has sorted you into ' + house + '</p>');

  // Append the new paragraph to the output div
  $("#output").html(resultParagraph);
});
