#!/usr/bin/env node

/*
 * Project Euler: Problem 32 - Pandigital products
 * http://projecteuler.net/problem=32
 *
 * We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example,
 * the 5-digit number, 15234, is 1 through 5 pandigital.
 *
 * The product 7254 is unusual, as the identity, 39 * 186 = 7254, containing multiplicand, multiplier, and product is 1
 * through 9 pandigital.
 *
 * Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9
 * pandigital.
 *
 * HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
 */

var toNumberArray = function(str) {
    return str.split("").map(function(a) {
        return Number(a);
    });
};

var isPandigital = function(a, b, c) {
    var digits = toNumberArray(String(a) + String(b) + String(c));
    if (digits.length !== 9) return false;

    var requiredDigits = [];
    for (var i = 0; i < digits.length; i++) {
        requiredDigits[digits[i]] = true;
    }

    var count = 0;
    for (i = 1; i <= 9; i++) {
        if (requiredDigits[i]) {
            count++;
        }
    }

    return count == 9;
};

var sumUnique = function(prev, current, index, array) {
    if (index === 1) prev = array[0];
    return prev + (current !== array[index - 1] ? current : 0);
};

var findPandigital = function(minA, maxA, minB, maxC) {
    var output = [];
    for (var a = minA; a <= maxA; a++) {
        for (var b = minB, c; (c = a * b) <= maxC; b++) {
            if (isPandigital(a, b, c)) {
                output.push(c);
            }
        }
    }
    return output;
};

var p32 = function() {
    return findPandigital(2, 8, 1234, 9876).concat(findPandigital(12, 79, 123, 9876)).sort().reduce(sumUnique);
};

console.log(p32());