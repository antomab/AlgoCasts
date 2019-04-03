// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// this is also good for solving the following, similar, problems:
// * Does string A have the same characters as string B (is it an anagram)?
// * Does the given string have any repeated characters in it?


function maxChar(str) {
    let obj = {};
    let maxChar = '';
    let maxNum = 0;

    for (let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }

    for (let char in obj) {
        if (obj[char] > maxNum) {
            maxChar = char;
            maxNum = obj[char];
        }
    }

    return maxChar;
}

module.exports = maxChar;
