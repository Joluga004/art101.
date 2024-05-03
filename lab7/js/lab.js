// Define the function to sort the user's name
// Define the function to shuffle the user's name and create an anagram
function createAnagram() {
  // Prompt the user to enter their name
  var userName = window.prompt("Please enter your name:");

  // Convert the user's name to lowercase and split it into an array of characters
  var nameArray = userName.toLowerCase().split('');

  // Shuffle the array of characters to create an anagram
  var shuffledNameArray = shuffleArray(nameArray);

  // Convert the shuffled array of characters back to a string
  var shuffledUserName = shuffledNameArray.join('');

  // Capitalize the words properly
  var capitalizedUserName = capitalizeWords(shuffledUserName);

  // Return the capitalized anagram of the user's name
  return capitalizedUserName;
}

// Function to shuffle an array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

// Function to capitalize words properly
function capitalizeWords(string) {
  return string.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
  });
}

// Call the function to create an anagram of the user's name
var anagramName = createAnagram();

// Output the capitalized anagram of the user's name
document.writeln("Your anagram name is: " + anagramName);
