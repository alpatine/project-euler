#!/usr/bin/env node

/*
 * Project Euler: Problem 30 - Digit fifth powers
 * http://projecteuler.net/problem=30
 *
 * Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
 *
 * 1634 = 1^4 + 6^4 + 3^4 + 4^4
 * 8208 = 8^4 + 2^4 + 0^4 + 8^4
 * 9474 = 9^4 + 4^4 + 7^4 + 4^4
 * As 1 = 1^4 is not a sum it is not included.
 *
 * The sum of these numbers is 1634 + 8208 + 9474 = 19316.
 *
 * Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
 */

var calculateMax = function(power) {
    var n = 1;
    var nineRaised = Math.pow(9, power);
    while (Math.pow(10,n) - 1 <= n * nineRaised) {
        n++;
    }
    return n * nineRaised;
};

var nthPower = function(n) {
    return function(a) {
        return Math.pow(Number(a), n);
    }
};

var sum = function(a, b) {
    return a + b;
};

var p30 = function(power) {
    var results = [];
    var max = calculateMax(power);
    for (var i = 10; i <= max; i++) {
        var digitSum = String(i).split("").map(nthPower(power)).reduce(sum, 0);
        if (digitSum === i) results.push(i);
    }
    return results.reduce(sum);
};

console.log(p30(5));