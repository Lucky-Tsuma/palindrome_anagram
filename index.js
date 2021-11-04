const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

const checkForPalindrome = (text) => {
    text = text.toLowerCase();
    const charArray = text.split("");
    const noSpaces = [];
    charArray.map((char) => { if(char !== " ") noSpaces.push(char) });
    
    text = noSpaces.join("");
    reversed_text = noSpaces.reverse().join("");
    
    return text === reversed_text ? "Palindrome" : "Not a palindrome";
    
}  

const checkForAnagram = (text_one, text_two) => {
    text_one = text_one.toLowerCase();
    text_two = text_two.toLowerCase();
    
    let charArray1 = text_one.split("").sort();
    let charArray2 = text_two.split("").sort();
    text_one = charArray1.join("");
    text_two = charArray2.join("");
    
    return text_one === text_two ? "Anagrams" : "Not Anagrams";
    
}


app.get('/', (req, res) => {
    res.send("Running. Homepage");
});

app.post('/palindrome', (req, res) => {
    const { text } = req.body;
    const isPalindrome = checkForPalindrome(text);
    res.send(isPalindrome);
});

app.post('/anagram', (req, res) => {
    const {text_one, text_two} = req.body;
    const areAnagrams = checkForAnagram(text_one, text_two);
    res.send(areAnagrams);
});

app.listen(port, () => {
    console.log(`Application running on port: ${port}`)
});