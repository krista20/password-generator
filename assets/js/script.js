// Assignment code here
//   - need lowercase, uppercase, numeric, &/ special characters (variables and an array to list them easier)




//   console.log(askPrompt);
// //  make prompts
//   var askPrompt = parseInt(window.prompt('How many characters would you like your password to be? Please choose a number between 8 to 128.'));
//     //   - PS charLength = 8 - 128 --> validate prompt answer
//     // returns false until a number from 8 to 128 is selected.
//     if (askPrompt < 8 || askPrompt > 128 || isNaN(askPrompt)) {
//       window.prompt('Please type a number value between 8 - 128.');
//       return "";
//     }
//     // if true ask if user wants to add lowercase characters. **confirm makes it a Boolean (True or False)**
//     if (window.confirm ('Click ok to confirm that you would like to include lowercase characters.')); {
//     // **concat method joins strings**
//       charactersArry = charactersArry + lowerCharacters * Math.random;
//     }
//     // if true ask if user wants to add uppercase characters.
//     if (window.confirm ('Click ok to confirm that you would like to include uppercase characters')); {
//       charactersArry = charactersArry + upperCharacters * Math.random;
//     }
  
//     // if true ask if user wants to add numeric characters.
//     if (window.confirm ('Click to confirm that you would like to include numeric characters.')); {
//       charactersArry = charactersArry + numeric * Math.random;
//     }

//     // if true ask if user wants to add special characters.
//     if (window.confirm ('Click to confirm that you would like to include special characters.')); {

//       charactersArry = charactersArry + specialCharacters * Math.random;
//     }

//     for (var i = 0; i < charLength; i++) {
//     var randomCharacters = Math.floor(Math.random() * charactersArry.length);
//       password += charactersArry(random, random + 1);
//     }
      
// //   --> input should be validated (validated with Booleans above)
// //   --> generate PS

// //   - display PS to pg
//   return (password);
// }

var charactersArry = [];
var charLength = 8;

var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i','j', 'k', 'l','m', 'n', 'o','p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I','J', 'K', 'L','M', 'N', 'O','P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5','6', '7', '8','9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^','&', '*', '(', ')', '-', '_', '=', '+','[', '{',']', '}',';', ':', ',', '<','.', '>','?', '/',];


function promptCalls() {
charactersArry = [];

charLength = parseInt(prompt("How many characters would you like your password to be? Please choose a number between 8 to 128."));

    if(isNaN(charLength) || charLength < 8 || charLength > 128) {
      alert("Please type a number value between 8 - 128.");
      return false;
    }

    if (confirm('Click ok to confirm that you would like to include lowercase characters.')) {
      charactersArry = charactersArry.concat(lowerCharacters);
    }

    if (confirm('Click ok to confirm that you would like to include uppercase characters.')) {
      charactersArry = charactersArry.concat(upperCharacters);
    }

    if (confirm('Click ok to confirm that you would like to include numeric characters.')) {
      charactersArry =  charactersArry.concat(numeric);
    }

    if (confirm('Click ok to confirm that you would like to include special characters.')) {
      charactersArry =  charactersArry.concat(specialCharacters);
    }
    return true;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {

  var truePrompt = promptCalls(); // calling promptCalls & saying if it's true to follow below code

    if (truePrompt) {
       //generatePassword is undefined so i need to define it
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // value is being stored to generatePassword
  passwordText.value = password;
    }
}

//need value for generatePassword
//need to return the generated variable 
 function generatePassword() {
   var passwordGen = "";
   for (var i = 0; i < charactersArry; i++) { // this for loops generates random PS

   }
 }