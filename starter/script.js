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

// Function to prompt user for password options
function getPasswordOptions() {
  //prompt user for length of password and turn password length into number?
  var passwordLength = parseInt(prompt('How many characters would you like your password to contain? (8 - 128)'));

  // if cancelled alert user
  if (passwordLength === null) {
    alert('Password cancelled!');
  }

  //validate length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Password must be between 8 and 128 characters. Please try again!');
    passwordLength = parseInt(prompt('How many characters would you like your password to contain? (8 - 128)'));

  }

  //prompt for character types
  var includeLower = confirm('Click OK to confirm or cancel to decline lower case characters');
  console.log('iL');

  var includeUpper = confirm('Click OK to confirm or cancel to decline upper case characters');
  console.log('iU');

  var includeNumeric = confirm('Click OK to confirm or cancel to decline numeric characters');
  console.log('iN');

  var includeSpecial = window.confirm('Click OK to confirm or cancel to decline special characters');
  console.log('iS');

  //validate that at least one character type is selected
  while (!(includeLower || includeUpper || includeNumeric || includeSpecial)) {
    alert("At least one character type should be selected.");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }
  // Return object with selected options

  return {
    passwordLength: length,
    includeLower: includeLower,
    includeUpper: includeUpper,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };
  
}
// var passwordOptions = getPasswordOptions();
// console.log(getPasswordOptionspasswordOptions);

  // Function for getting a random element from an array. Use .length to go through whole array. Create variable for random index
  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  // Function to generate password with user input
  function generatePassword() {
    // getPasswordOptions ();

    // if (getPasswordOptions.lower) ;
    // if (getPasswordOptions.upper) ;
    // if (getPasswordOptions.numeric);
    // if (getPasswordOptions.special);

    // for (let i = 0; i < getPasswordOptions.length; i++) {
 }


    // return "";

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