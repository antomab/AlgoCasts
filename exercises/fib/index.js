// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// Using ITERATION
// Runtime Complexity: Linear Runtime
// function fib(n) {
//     var fibArr = [0, 1];
//
//     for(let i = 2; i <= n; i++) {
//         fibArr[i] = fibArr[i-1] + fibArr[i-2];
//     }
//
//     return fibArr[n];
// }

// Using RECURSION
// Runtime Complexity: Exponential Runtime
// function fib (n) {
//     if (n < 2) {
//         return n;
//     }
//
//     return fib(n-1) + fib(n-2);
// };

// Using RECURSION with improved performance (MEMOIZATION)
// To avoid calling the function with the same argument
// multiple times, we can store the arguments of each
// function call along with the result.
function memoize (fn) {
    const cache = {};

    return function (...args) {

        // has this function ever been called
        // with this particular part of args before?
        if (cache[args]) {
            return cache[args];
        }

        // call the function with the given arguments
        const result = fn.apply(this, args);

        // and store in cache
        cache[args] = result;

        return result;
    };
};

function slowFib (n) {
    if (n < 2) {
        return n;
    }

    return fib(n-1) + fib(n-2);
};

// reassign "fib" to be the memoized version
const fib = memoize(slowFib);
// fib = function (...args) { .... };
// fib(4) -> function (4) { .... };

module.exports = fib;
