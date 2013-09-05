#!/usr/bin/env node

/*
 * Project Euler: Problem 6 - Sum square difference
 * http://projecteuler.net/problem=6
 *
 * The sum of the squares of the first ten natural numbers is: 1^2 + 2^2 + ... + 10^2 = 385
 * The square of the sum of the first ten natural numbers is: (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
 * 3025 - 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the
 * sum.
 *
 */

var sumNaturalTo = function(n) {
    return (n + 1) / 2 * n;
};

var sumSquaresTo = function(n) {
    return (2 * n + 1) / 6 * (n + 1) * n;
};

var findDiff = function(n) {
    var naturalSum = sumNaturalTo(n);
    var squareSum = sumSquaresTo(n);
    return naturalSum * naturalSum - squareSum;
};

console.log(findDiff(100));