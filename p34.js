#!/usr/bin/env node

/*
 * Project Euler: Problem 34 - Digit factorials
 * http://projecteuler.net/problem=34
 *
 * 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
 *
 * Find the sum of all numbers which are equal to the sum of the factorial of their digits.
 *
 * Note: as 1! = 1 and 2! = 2 are not sums they are not included.
 */

var singleToFactorial = function(n) {
    return [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880][n];
};

var sum = function(a, b) {
    return a + b;
};

var factorialDigitSum = function() {
    var found = [];
    for (var n = 10; n <= 2177282; n++) {
        if (n == String(n).split("").map(singleToFactorial).reduce(sum)) {
            found.push(n);
        }
    }
    return found.reduce(sum);
};

console.log(factorialDigitSum());