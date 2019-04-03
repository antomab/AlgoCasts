// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// using REDUCE
// function palindrome(str) {
//
//    const reversedStr = str.split('')
//         .reduce((reversed, currChar) => currChar + reversed , '');
//
//    return str === reversedStr;
// }

// using REVERSE
function palindrome(str) {

    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}


// using EVERY
// not ideal, it goes through the whole string instead of stopping at the middle
// function palindrome(str) {
//     return str
//             .split('')
//             .every((char, i) => {
//                return char === str[str.length - i - 1];
//             });
// }


module.exports = palindrome;
