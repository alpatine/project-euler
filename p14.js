#!/usr/bin/env node

/*
 * Project Euler: Problem 14 - Longest Collatz sequence
 * http://projecteuler.net/problem=14
 *
 * The following iterative sequence is defined for the set of positive integers:
 *      n -> n / 2 (n is even)
 *      n -> 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following sequence:
 *      13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
 *
 * It can be seem that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been
 * proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 *
 * Which starting number, under one million, produces the longest chain?
 *
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */

var collatzLength = function(n) {
    var count = 1;
    while (n > 1) {
        if (n % 2 === 0) {
            n /= 2;
            count++;
        } else {
            n = (3 * n + 1) / 2;
            count += 2;
        }
    }
    return count;
};

var range = function(a, b) {
    var out = [];
    for (var i = a; i <= b; i++) {
        out.push(i);
    }
    return out;
};

var findMaxPos = function(array) {
    var maxPos = 0;
    for (var i = 1, arrayLen = array.length; i < arrayLen; i++) {
        if (array[i] > array[maxPos]) {
            maxPos = i;
        }
    }
    return maxPos;
};

var longestCollatz = function(a, b) {
    var starts = range(a, b);
    var lengths = starts.map(collatzLength);
    var maxPos = findMaxPos(lengths);
    return maxPos + a;
};

console.log(longestCollatz(1, 1e6 - 1));