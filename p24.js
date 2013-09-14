#!/usr/bin/env node

/*
 * Project Euler: Problem 24 - Lexicographic permutations
 * http://projecteuler.net/problem=24
 *
 * A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2,
 * 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The
 * lexicographic permutations of 0, 1 and 2 are:
 *
 * 012   021   102   120   201   210
 *
 * What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

var range = function(a, b) {
    var numbers = [];
    for (var i = a; i <= b; i++) {
        numbers.push(i);
    }
    return numbers;
};

var toFactorial = function(n) {
    var product = 1;
    for (var i = 2; i <= n; i++) {
        product *= i;
    }
    return product;
};

var nthPermutation = function(n, digits) {
    n--; // this algorithm is zero based
    var factorials = range(0, digits.length - 1).map(toFactorial).reverse();
    console.log("factorials: " + factorials);

    var output = [];

    for (var quotient, remainder = n, i = 0; i < factorials.length; i++) {
        quotient = Math.floor(remainder / factorials[i]);
        remainder = remainder % factorials[i];
        output.push(digits.splice(quotient, 1)[0]);
    }
    return output;
};

console.log(nthPermutation(1000000, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));