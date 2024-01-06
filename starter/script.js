// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
/*Generate a password when the button is clicked
Present a series of prompts for password criteria
Length of password
At least 8 characters but no more than 128.
Character types
Lowercase
Uppercase
Numeric
Special characters ($@%&*, etc)

Code should validate for each input and at least one character type should be selected
Once prompts are answered then the password should be generated and displayed in an alert or written to the page*/

// 1. create prompt messages
let passwordLength
// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt('How many characters would you like your password to contain? (8 - 128)');
  console.log()
  if(passwordLength <8) {
    alert('Not enough characters, please try again!');
    // return;
  }
  if(passwordLength >128) {
    alert('Too many characters, please try again!');
    // return;
  }

  console.log(passwordLength);

  //need window confirm name to call info?
  let passwordLower = window.confirm('Click OK to confirm or cancel to decline lower case characters');
  // console.log()
  // if(passwordLower == true){
  let passwordUpper = window.confirm('Click OK to confirm or cancel to decline upper case characters');

  let passwordNumeric = window.confirm('Click OK to confirm or cancel to decline numeric characters');

  let passwordSpecial = window.confirm('Click OK to confirm or cancel to decline special characters');
  }

  //object for password options? All choices organised in one section, easier to call?
  let passwordOptions = {
    length: passwordLength,
  }

// let passwordOptions = getPasswordOptions();
// console.log(passwordOptions);


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

  
return "ThisIsYourPassword1111";
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
console.log('you clicked the button');