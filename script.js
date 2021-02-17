// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(
  passwordLength, 
  includeSpecial, 
  includeLowercase, 
  includeUppercase,
  includeNumbers
  ) {

    let characterOptions = [];
    
    //could have used char codes
    let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
    let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

    if (includeNumbers) {
      characterOptions = characterOptions.concat(numbers)
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
    let passwordLength = window.prompt("Enter desired password length.");
      if (passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be between 8 and 128 characters.")
        return
      } 
    //confirm
    let includeSpecial = window.confirm("Press OK to include special characters.");
    let includeLowercase = window.confirm("Press OK to include lowercase characters.");
    let includeUppercase = window.confirm("Press OK to include uppercase characters.");
    let includeNumbers = window.confirm("Press OK to include numbers.");

    if (!includeSpecial && !includeLowercase && !includeUppercase && !includeNumbers) {
      alert("Password must contain at least one character option.")
      return
    }
    //validate options?

    var password = generatePassword(
      passwordLength,
      includeSpecial,
      includeLowercase,
      includeUppercase,
      includeNumbers
      );

    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
