#!/usr/bin/env node

/*
 * Project Euler: Problem 20 - Factorial digit sum
 * http://projecteuler.net/problem=20
 *
 * n! means n * (n − 1) * ... * 3 * 2 * 1
 *
 * For example, 10! = 10 * 9 * ... * 3 * 2 * 1 = 3628800,
 * and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 *
 * Find the sum of the digits in the number 100!
 */

var toNumber = function(n) {
    return Number(n);
};

var longMultiply = function(arrA, arrB) {
    var result = [];

    // Multiply digits
    for (var posA = 0; posA < arrA.length; posA++) {
        for (var posB = 0; posB < arrB.length; posB++) {
            result[posA + posB] = arrA[posA] * arrB[posB] + (result[posA + posB] || 0);
        }
    }

    // Smooth out carry values
    for (var i = 0; i < result.length; i++) {
        var carry = Math.floor(result[i] / 10);
        result[i] %= 10;
        if (carry !== 0) {
            result[i+1] = carry + (result[i+1] || 0);
        }
    }

    return result;
};

var sum = function(a, b) {
    return a + b;
};

var factorialDigitSum = function(n) {
    var numbers = [];
    for (var i = 1; i <= n; i++) {
        numbers.push(String(i).split("").reverse().map(toNumber));
    }

    return numbers.reduce(longMultiply).reduce(sum);
};

console.log(factorialDigitSum(100));
