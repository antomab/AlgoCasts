// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// SOLUTION 1
// function cleanString (string) {
//     return string.replace(/\W/g, '').toLowerCase();
// }
//
// function createCharacterMap (string) {
//     let charMap = {};
//
//     for (let char of string) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//
//     return charMap;
// }
// function anagrams(stringA, stringB) {
//     // remove all non-alphanumeric characters
//     const strA = cleanString(stringA);
//     const strB = cleanString(stringB);
//
//     // if not the same amount of characters, then
//     // it's definitely not an anagram
//     if (strA.length !== strB.length) {
//         return false;
//     }
//
//     // build a character map for each string
//     let charMapA = createCharacterMap(strA);
//     let charMapB = createCharacterMap(strB);
//
//     // compare both objects and see if they have the
//     // same amount of letters each
//     for (let prop in charMapA) {
//         if (charMapB[prop] != charMapA[prop]) {
//             return false;
//         }
//     }
//
//     return true;
// }



// SOLUTION 2
// More straight-forward, but might run into performance issues (?)
function cleanString (string) {
    return string.replace(/\W/g, '').toLowerCase();
}

function sortString (string) {
    return string.split('').sort().join('');
}

function anagrams (stringA, stringB) {
    const strA = cleanString(stringA);
    const strB = cleanString(stringB);

    return sortString(strA) === sortString(strB);
}

module.exports = anagrams;
