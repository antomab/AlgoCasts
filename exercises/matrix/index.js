// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // create matrix
    let results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    // initialize counters
    let counter = 1;

    let startRow = 0,
        endRow = n - 1,
        startCol = 0,
        endCol = n - 1;

    while (startCol <= endCol && startRow <= endRow) {
        // top row of spiral
        for (let j = startCol; j <= endCol; j++) {
            results[startRow][j] = counter;
            counter++;
        }
        startRow++;

        // right column of spiral
        for (let k = startRow; k <= endRow; k++) {
            results[k][endCol] = counter;
            counter++;
        }
        endCol--;

        // bottom row of spiral
        for (let m = endCol; m >= startCol; m--) {
            results[endRow][m] = counter;
            counter++;
        }
        endRow--;

        // left column of spiral
        for (let b = endRow; b >= startRow; b--) {
            results[b][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return results;
}

module.exports = matrix;
