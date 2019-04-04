// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// Using REPEAT
// function getStep(pounds, spaces) {
//     return '#'.repeat(pounds) + ' '.repeat(spaces);
// }
// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(getStep(i, n - i));
//     }
// }


// Using two LOOPS
// function steps (n) {
//     for (let row = 0; row < n; row++) {
//         let step = '';
//
//         for (let col = 0; col < n; col++) {
//             step += (col <= row ? '#' : ' ');
//         }
//
//         console.log(step);
//     }
// }


// Using RECURSION
function steps (n, row = 0, step = '') {
    if (n === row) {
        return;
    }

    if (n === step.length) {
        console.log(step);
        return steps(n, row + 1);
    }

    if (step.length <= row) {
        step += '#';
    } else {
        step += ' ';
    }

    return steps(n, row, step);
}

module.exports = steps;
