// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Length
//Include Special Characters

let passwordLength = 10;
let includeSpecial = true;
let includeLowercase = true;
let includeUppercase = false;

function generatePassword() {
  return "Test"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
