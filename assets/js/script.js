
// Assignment code here
//   - need lowercase, uppercase, numeric, &/ special characters (variables and an array to list them easier)
var charactersArry = [];
var charLength = 8;

var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i','j', 'k', 'l','m', 'n', 'o','p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I','J', 'K', 'L','M', 'N', 'O','P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5','6', '7', '8','9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^','&', '*', '(', ')', '-', '_', '=', '+','[', '{',']', '}',';', ':', ',', '<','.', '>','?', '/',];

// function to have prompts to choose from, from user once the generate PS is clicked
function promptCalls() {
charactersArry = []; //this is empty and allows a restart

charLength = parseInt(prompt("How many characters would you like your password to be? Please choose a number between 8 to 128."));
    //isNaN = is not a number
    if(isNaN(charLength) || charLength < 8 || charLength > 128) {
      alert("Please type a number value between 8 - 128.");
      return false;
    }
    // this if statement and the if statements below are booleans (true/false) & do not need an else
    // concat used to 
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
// This is saying, when i click on the generate password button, then writepassword is referenced
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var truePrompt = promptCalls(); // calling promptCalls & saying if it's true to follow below code, if not follow the else code
  var passwordText = document.querySelector("#password"); // passwordText needs to 
    if (truePrompt) {
  //generatePassword is undefined so i need to define it (defined with function below)
  var password = generatePassword();
  
  // value is being stored to generatePassword
  passwordText.value = password;
    } else { // if promptCall is false
      passwordText.value = "";
    }
}

//need value for generatePassword (this is why a generatePassword function is created)
//need to return the generated variable 
 function generatePassword() {
   
   var passwordGen = ""; // starts w/ empty string to allow it to generate arrays randomly
   for (var i = 0; i < charLength; i++) { // this for loop generates random PS length
     var randomPassChar = Math.floor(Math.random() * charactersArry.length); // to get random element from your array
      passwordGen = passwordGen + charactersArry[randomPassChar]; // to get a random password character from array, added to PasswordGen, and stored into passwordGen
   }
   // This generates the new paswword after all prompts are answered
   // value is returned to var password = generatePassword();
   return passwordGen;
 }