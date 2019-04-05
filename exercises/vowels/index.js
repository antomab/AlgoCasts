// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// Using ITERATION
function vowels(str) {
    let arrVowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;

    for (let char of str.toLowerCase()) {
        if (arrVowels.includes(char))
            counter++;
    }

    return counter;
}

// Using REGULAR EXPRESIONS
// function vowels (str) {
//     // []: check if the word contains any letter within brackets
//     // i: case insensitive
//     // g: don't stop at first find
//
//     // array of all matches, or null if none found
//     const matches = str.match(/[aeiou]/gi);
//
//     return matches ? matches.length : 0;
// }



module.exports = vowels;
