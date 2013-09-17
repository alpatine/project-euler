#!/usr/bin/env node

/*
 * Project Euler: Problem 25 - 1000-digit Fibonacci number
 * http://projecteuler.net/problem=25
 *
 * The Fibonacci sequence is defined by the recurrence relation:
 *
 * Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
 *
 * Hence the first 12 terms will be:
 *
 * F1 = 1
 * F2 = 1
 * F3 = 2
 * F4 = 3
 * F5 = 5
 * F6 = 8
 * F7 = 13
 * F8 = 21
 * F9 = 34
 * F10 = 55
 * F11 = 89
 * F12 = 144
 * The 12th term, F12, is the first term to contain three digits.
 *
 * What is the first term in the Fibonacci sequence to contain 1000 digits?
 */

var longAddition = function(arrA, arrB) {
    var result = [];
    var maxI = Math.max(arrA.length, arrB.length);
    for (var i = 0; i < maxI; i++) {
        result[i] = (arrA[i] || 0) + (arrB[i] || 0) + (result[i] || 0);
        if (result[i] >= 10) {
            result[i] %= 10;
            result[i+1] = 1;
        }
    }
    return result;
};

var firstFibonacciTermWithNDigits = function(n) {
    var a = [1];
    var b = [1];
    var c;

    for (var i = 2; b.length < n; i++) {
        c = longAddition(a, b);
        a = b;
        b = c;
    }

    return i;
};

console.log(firstFibonacciTermWithNDigits(1000));