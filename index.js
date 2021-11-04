const checkForPalindrome = (text) => {
  text = text.toLowerCase();
  const charArray = text.split("");
  const noSpaces = [];
  charArray.map((char) => { if(char !== " ") noSpaces.push(char) });

  text = noSpaces.join("");
  reversed_text = noSpaces.reverse().join("");

  text === reversed_text ? console.log("Palindrome") : console.log("Not a palindrome");

}

checkForPalindrome("Mr owl ate my metal worm"); //Palindrome
checkForPalindrome("The Jitu"); //Not a palindrome