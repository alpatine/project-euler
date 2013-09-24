#!/usr/bin/env node

/*
 * Project Euler: Problem 36 - Double-base palindromes
 * http://projecteuler.net/problem=36
 *
 * The decimal number, 585 = 1001001001_2 (binary), is palindromic in both bases.
 *
 * Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
 *
 * (Please note that the palindromic number, in either base, may not include leading zeros.)
 */

var reverseString = function(str) {
    var out = "";
    for (var i = str.length - 1; i >= 0; i--) {
        out += str[i];
    }
    return out;
};

var isPalindrome = function(num) {
    var numString = String(num);
    return numString === reverseString(numString);
};

var findDoubleBasePalindromeSum = function(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (isPalindrome(i) && isPalindrome(i.toString(2))) {
            sum += i;
        }
    }
    return sum;
};

console.log(findDoubleBasePalindromeSum(999999));