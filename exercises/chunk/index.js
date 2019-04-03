// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// the ITERATIVE way
// function chunk(array, size) {
//     let allArrays = [];
//     let arr = [];
//
//     for (let element of array) {
//         arr.push(element);
//
//         if (arr.length == size) {
//             allArrays.push(arr);
//             arr = [];
//         }
//     }
//
//     if (arr.length > 0) {
//         allArrays.push(arr);
//     }
//
//     return allArrays;
// }

// using SLICE
function chunk (array, size) {
    let allArrays = [];
    let index = 0;

    while (index < array.length) {
        allArrays.push(array.slice(index, index + size));
        index += size;
    }

    return allArrays;
}

module.exports = chunk;
