// index.js - conditionals
// Author: Jorge L. Garcia
// Date:05/22/2024
// 
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

function sortingHat(str) {
    const houses = [
        { name: "Gryffindor", description: "confrontational, aggresive, anxious, and a flirt." },
        { name: "Ravenclaw", description: "street smart, Conceptual Artist, stubborn, and charasmatic." },
        { name: "Slytherin", description: "Republican, Not Not Hot, Kinda hot aggresive, and delulu." },
        { name: "Hufflepuff", description: "on time, pushover, polyamorous, and fun." }
    ];

    const length = str.length;
    const mod = length % houses.length;
    return houses[mod];
}

$("#button").click(function() {
    const name = $("#input").val();
    const house = sortingHat(name);

    const resultParagraph = $('<p class="house-result">The Sorting Hat has sorted you into ' + house.name + '. ' + house.description + '</p>');
    $("#output").html(resultParagraph);
});
