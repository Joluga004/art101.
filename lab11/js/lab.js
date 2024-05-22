// index.js - Anon and Call back Functions
// Author: Jorge L. Garcia
// Date:05/19/2024
// Generates an anagram of a given string.
// credit to ChatGPT

// Function to generate an anagram
function anagram(inputString) {
  // Convert the string to an array of characters
  const charArray = inputString.split('');

  // Use the Fisher-Yates (Knuth) shuffle algorithm to shuffle the characters
  for (let i = charArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
  }

  // Join the shuffled characters back into a string
  const anagram = charArray.join('');

  // Return the generated anagram
  return anagram;
}

// Extend the String prototype to include a method to convert to Title Case
String.prototype.toTitleCase = function() {
  return this.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

// Event listener for pressing "Enter" key
$("#user-name").keypress(function(event) {
  // Check if the pressed key is "Enter"
  if (event.which === 13) {
      // Generate an anagram when "Enter" is pressed
      generateAnagram();
  }
});

// Click listener for the submit button
$("#submit").click(function() {
  // Generate an anagram when the submit button is clicked
  generateAnagram();
});

// Function to generate an anagram and display it
function generateAnagram() {
  // Get the value of the input field
  const userName = $("#user-name").val();
  // Generate an anagram and convert it to Title Case
  const newName = anagram(userName).toTitleCase();
  // Display the anagram in the output div
  $("#output").html('<div class="name-results">' + newName + '</div>');
}