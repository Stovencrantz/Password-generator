var lowerCaseGroup = "abcdefghijklmnopqrstuvwxyz";
var upperCaseGroup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numGroup = "0123456789";
var specCharGroup = "!@#$%^&*()?[]{}<>?/:;|~";



console.log(lowerCaseGroup);
console.log(upperCaseGroup);
console.log(numGroup);
console.log(specCharGroup);

function generatePassword(){
  var passwordLength = 0;
  var passwordArr = [];
  var passwordStr = "";

  passwordLength = prompt("Please enter how long you would like your password to be: ");
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Sorry, that didnt quite work. Please enter the length of your password from 8-128 characters: ");
  }

  var confirmLowerCase = confirm("Do you want to include lowercase letters?");
  var confirmUpperCase = confirm("Do you want to include uppercase letters?");
  var confirmNums = confirm("Do you want to include numbers?");
  var confirmSpecChars = confirm("Do you want to include special characters?");

  if (confirmLowerCase) {
    passwordStr = passwordStr + lowerCaseGroup;
  }

  if (confirmUpperCase) {
    passwordStr = passwordStr + upperCaseGroup;
  }

  if (confirmNums) {
    passwordStr = passwordStr + numGroup;
  }

  if (confirmSpecChars) {
    passwordStr = passwordStr + specCharGroup;
  }



  passwordArr = passwordStr.split("");
  console.log(passwordArr);
  console.log(passwordArr.length);
  var _password = "";
  for (var i = 0; i < passwordLength; i++){
    var char = Math.floor(Math.random()*passwordArr.length);  //get a random value between 0 and 84 
    _password = _password+passwordArr[char];
    console.log("char: "+char+"  New Character: "+passwordArr[char]);
  }
  return _password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
  console.log("Finalized password: " + password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
