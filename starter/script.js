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
let passwordLower;
let passwordUpper;
let passwordNumeric;
let passwordSpecial;

// Function to prompt user for password options
function getPasswordOptions() {

  passwordLength = prompt('How many characters would you like your password to contain? (8 - 128)');

  if (passwordLength === null) {
    alert('Password cancelled. Please try again!');
  }
  //turn password length into number?
  passwordLength = parseInt(passwordLength);

  // multiple conditions in one. Greater than and equal to, to put in one if statement?
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength> 128) {
    alert('Password must be between 8 and 128 characters. Please try again!');
    
    return passwordLength; 
    // How to make prompt pop up until correct amount of characters input? else statement? Can you return a prompt? for loop?
    // while(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    //    passwordLength = prompt('How many characters would you like your password to contain? (8 - 128)');
    //    passwordLength = parseInt(passwordLength);
    // }
    // while (isNaN(passwordLength) || passwordLength < 8 || passwordLength> 128) {
    //   alert('Password must be between 8 and 128 characters. Please try again!');
  }

  //need if statement for confirms or cancels?
    passwordLower = confirm('Click OK to confirm or cancel to decline lower case characters');
  //   if(passwordLower === true){
  //   console.log('yes');
  // } else if(passwordLower === false);{
  //   console.log('no');
  // }

  // if(passwordLower == true){
  passwordUpper = confirm('Click OK to confirm or cancel to decline upper case characters');
  // if(passwordUpper === true){
  //   console.log('yes');
  // } else(passwordUpper === false);{
  //   console.log('no');
  // }

  passwordNumeric = confirm('Click OK to confirm or cancel to decline numeric characters');
  // if(passwordNumeric === true){
  //   console.log('yes');
  // } else(passwordNumeric === false);{
  //   console.log('no');
  // }

  passwordSpecial = window.confirm('Click OK to confirm or cancel to decline special characters');
  // if(passwordSpecial === true){
  //   console.log('yes');
  // } else(passwordSpecial === false);{
  //   console.log('no');
  // }

  //if statement in one line?

  //object for password options? All choices organised in one section, easier to call?

  let passwordOptions = {
    passwordLength: length,
    passwordLower: lower,
    passwordUpper: upper,
    passwordNumeric: numeric,
    passwordSpecial: special
  };


  return passwordOptions;
  
}
 let passwordOptions = getPasswordOptions();
console.log(passwordOptions);


// Function for getting a random element from an array. Use .length to go through whole array. Create variable for random index
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
getPasswordOptions ();

if (getPasswordOptions.lower) ;
if (getPasswordOptions.upper) ;
if (getPasswordOptions.numeric);
if (getPasswordOptions.special);

for (let i = 0; i < getPasswordOptions.length; i++) {
  
}

  
return "";
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
