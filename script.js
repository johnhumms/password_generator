// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(
  passwordLength, 
  includeSpecial, 
  includeLowercase, 
  includeUppercase
  ) {

    let characterOptions = [];
    
    let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
    let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

    //concat combines arrays
    if (includeSpecial) {
      characterOptions = characterOptions.concat(special)
    }

    if (includeUppercase) {
      characterOptions = characterOptions.concat(uppercase)
    }

    if (includeLowercase) {
      characterOptions =characterOptions.concat(lowercase)
    }

    let res = ""

    for (i=0; i<passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characterOptions.length)
      res += characterOptions[randomIndex]
    }
    return res
}

// Write password to the #password input
function writePassword() {
    let passwordLength = window.prompt("Enter desired passoword length.");
    // how do I prompt a yes or no to user??
    let includeSpecial = true;
    let includeLowercase = true;
    let includeUppercase = true;

    //validate options?

    var password = generatePassword(
      passwordLength,
      includeSpecial,
      includeLowercase,
      includeUppercase,
      );

    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
