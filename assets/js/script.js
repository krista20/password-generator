// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//need value for generatePassword
//need to return the generated variable 
function generatePassword() {
  console.log("Button Pressed!");
//  make prompts
  var askPrompt = window.prompt('How many characters would you like your password to be? Please choose a number between 8 to 128.');
    //   - PS length = 8 - 128 --> validate prompt answer
    // returns false until a number from 8 to 128 is selected.
    if (askPrompt < 8 || askPrompt > 128) {
      window.prompt('Please type a number value between 8 - 128.');
      return "";
    }
    // if true ask if user wants to add lowercase characters.
    var confirmLower = window.confirm ('Click ok to confirm that you would like to include lowercase characters.');
      if (confirmLower) {
        lowerCharacters = Math.random;
      } else {
        return false(window.confirm ('Click ok to confirm that you would like to include lowercase characters.'));
      }

    // if true ask if user wants to add uppercase characters.
    var confirmUpper = window.confirm ('Click ok to confirm that you would like to include uppercase characters');
      if (confirmUpper) {
        upperCharacters = Math.random;
      } else {
        return false(window.confirm ('Click ok to confirm that you would like to include uppercase characters'));
      }

    // if true ask if user wants to add numeric characters.
    var confirmNum = window.confirm ('Click to confirm that you would like to include numeric characters.');
      if (confirmNum) {
        lowerCharacters = Math.random;
      } else {
        return false(window.confirm ('Click to confirm that you would like to include numeric characters.'));
      }

    // if true ask if user wants to add special characters.
    var confirmSpecial = window.confirm ('Click to confirm that you would like to include special characters.');
      if (confirmSpecial) {
        specialCharacters = Math.random;
      } else {
        return false(window.confirm ('Click to confirm that you would like to include special characters.'));
      }

     // if (confirmLower(askPrompt >= 8 && askPrompt <= 128))

//   - need lowercase, uppercase, numeric, &/ special characters (global variables)
var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i','j', 'k', 'l','m', 'n', 'o','p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I','J', 'K', 'L','M', 'N', 'O','P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5','6', '7', '8','9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^','&', '*', '(',')', '-', '_', '=', '+','[', '{',']', '}',';', ':', ',', '<','.', '>','?', '/',];
//   --> input should be validated
//   --> generate PS



//   - display PS to pg
  return ('');
}



// Write password to the #password input
function writePassword() {
  //generatePassword is undefined so i need to define it
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // value is being stored to generatePassword
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);