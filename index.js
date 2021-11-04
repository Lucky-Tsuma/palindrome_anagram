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


const checkForAnagram = (text_one, text_two) => {
    text_one = text_one.toLowerCase();
    text_two = text_two.toLowerCase();

    let charArray1 = text_one.split("").sort();
    let charArray2 = text_two.split("").sort();
    text_one = charArray1.join("");
    text_two = charArray2.join("");

    text_one === text_two ? console.log("Anagrams") : console.log("Not Anagrams");

}

checkForAnagram("Listen", "Silent"); //Anagrams
checkForAnagram("Fortune", "Fortunate"); //Not Anagrams