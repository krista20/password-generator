// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 // addedmcode
function verifyPassword() {  
  var pw = document.getElementById("pswd").value;  
  //check empty password field  
 //minimum password length validation  
  if(pw.length < 8) {  
    window.alert("Password must be at least 8 charcters long.");
     return null;  
  }  
  
//maximum length of password validation  
  if(pw.length > 128) {  
    window.alert("Password must be less than 128 characters long.");
     return null;  
  } else {  
     alert("Password is correct");  
  }  
}  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  