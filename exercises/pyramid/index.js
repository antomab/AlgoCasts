// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Using FOR LOOPS
// function pyramid(n) {
//     const base = (n*2) - 1;
//     const midpoint = Math.floor(base / 2);
//
//     for (let row = 0; row < n; row++) {
//         let level = '';
//
//         for (let col = 0; col < base; col++) {
//             if ((midpoint - row <= col) &&
//                 (midpoint + row >= col))
//             {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//
//         console.log(level);
//     }
// }

// Using RECURSION
function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    const base = (n*2) - 1;
    const midpoint = Math.floor(base / 2);

    if (level.length === base) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    if ((midpoint - row <= level.length) &&
        (midpoint + row >= level.length)) {
        level += '#';
    } else {
        level += ' ';
    }

    return pyramid(n, row, level);
}

module.exports = pyramid;
