
//check letter Vowel or Consonant

let letter = prompt('Inter a letter: ');
letter = letter.toLowerCase();

if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u" 
)
document.getElementById("Program-1").innerHTML = `'This letter is Vowel'`;

else {
    document.getElementById("Program-1").innerHTML = `'This letter is consonant'`;
}


