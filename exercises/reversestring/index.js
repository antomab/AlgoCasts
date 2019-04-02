// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Using recursion
// function reverse(str) {
//     if (str.length == 0) {
//         return str;
//     }
//
//     return str[str.length-1] + reverse(str.slice(0, str.length-1))
// }

// Using the reverse helper
// function reverse (str) {
//     // turn str into an array
//     // reverse the array
//     // join it again
//     return str
//             .split('')
//             .reverse()
//             .join('');
// }

// Using FOR loop
// function reverse (str) {
//     let reversed = '';
//
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//
//     return reversed;
// }

// Using the REDUCE helper
function reverse (str) {
    return str
        .split('')
        .reduce((reversed, currVal) => currVal + reversed, '');
}

module.exports = reverse;
