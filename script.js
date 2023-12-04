// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Global user selected options
var userOptions = {};
//Password length prompt
function lengthOption() {
  userOptions.length = prompt(
    "How many characters would you like your password to be? Must be a number between 8-128."
  );
}
//Password character type confirms
function charType() {
  userOptions.lower = confirm(
    "Do you want lower case characters in your password?"
  );
  userOptions.upper = confirm(
    "Do you want upper case characters in your password?"
  );
  userOptions.num = confirm(
    "Do you want numerical characters in your password?"
  );
  userOptions.special = confirm(
    "Do you want special characters ($@%&*, etc) in your password?"
  );
}
// Function for password option validation
function valPasswordOptions() {
  lengthOption();
  if (userOptions.length < 8 || userOptions.length > 128) {
    alert("Invalid input! Please choose a value between 8 and 128.");
    lengthOption();

    charType();

    if (
      (userOptions.lower,
      userOptions.upper,
      userOptions.num,
      userOptions.special === false)
    ) {
      alert("Invalid input! Please have at least one character type selected.");
      charType();
    }
  }
}

// Function for getting a random element from an array
function getRandom(array) {
  var element = array[Math.floor(Math.random()*array.length)]
  return element;

}

// Function to generate password with user input
function generatePassword() {
  //uppper = getRandom(upper)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", valPasswordOptions);
