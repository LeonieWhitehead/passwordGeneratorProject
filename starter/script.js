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

// 1. create prompt messages
// 2. create variables for each prompt option

let passwordLength;

// let passwordUpper;
// let passwordNumeric;
// let passwordSpecial;


// Function to prompt user for password options
function getPasswordOptions() {

  passwordLength = prompt('How many characters would you like your password to contain? (8 - 128)');
  //turn password length into number?
  passwordLength = parseInt(passwordLength);

  // multiple conditions in one. Greater than and equal to, to put in one if statement?

  console.log()
  if(isNaN(passwordLength) < passwordLength < 8 || passwordLength> 128) {
    alert('Password must be between 8 and 128 characters. Please try again!');
    return null;
  }
  let passwordOpts = {
    length: passwordLength,
    lower: passwordLower,
    upper: passwordUpper,
    numeric: passwordNumeric,
    special: passwordSpecial,
  };
  
  }

    //need window confirm name to call info?
    let passwordLower = window.confirm('Click OK to confirm or cancel to decline lower case characters');
    console.log('yes')

  // if(passwordLower == true){
  let passwordUpper = window.confirm('Click OK to confirm or cancel to decline upper case characters');
  console.log('yes')

  let passwordNumeric = window.confirm('Click OK to confirm or cancel to decline numeric characters');
  console.log('yes')

  let passwordSpecial = window.confirm('Click OK to confirm or cancel to decline special characters');
  console.log('yes')

  //need if statement confirms or cancels?

  //object for password options? All choices organised in one section, easier to call?



  // return passwordOpts;
  

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
