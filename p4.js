#!/usr/bin/env node

/*
 * Project Euler: Problem 4 - Largest palindrome product
 * http://projecteuler.net/problem=4
 *
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is
 * 9009 = 91 * 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

var reverseString = function(str) {
    var out = "";
    for (var i = str.length - 1; i >= 0; i--)
        out += str[i];
    return out;
};

var isPalindrome = function(num) {
    var numString = String(num);
    return numString === reverseString(numString);
};

var findPalindrome = function() {
    var bestA = 0,
        bestB = 0,
        largestFound = 0;

    for (var a = 100; a <= 999; a++) {
        for (var b = a; b <= 999; b++) {
            var product = a * b;
            if (isPalindrome(product) && product > largestFound) {
                bestA = a;
                bestB = b;
                largestFound = product;
            }
        }
    }

    return largestFound;
};

console.log(findPalindrome());