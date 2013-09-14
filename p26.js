#!/usr/bin/env node

/*
 * Project Euler: Problem 26 - Reciprocal cycles
 * http://projecteuler.net/problem=26
 *
 * A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to
 * 10 are given:
 *
 * 1/2	= 	0.5
 * 1/3	= 	0.(3)
 * 1/4	= 	0.25
 * 1/5	= 	0.2
 * 1/6	= 	0.1(6)
 * 1/7	= 	0.(142857)
 * 1/8	= 	0.125
 * 1/9	= 	0.(1)
 * 1/10	= 	0.1
 * Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring
 * cycle.
 *
 * Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
 */

var range = function(a, b) {
    var output = [];
    for (var i = a; i <= b; i++) {
        output.push(i);
    }
    return output;
};

var calculateRepetend = function(n) {
    // reduce n to be co-prime with 10
    while (n % 2 === 0) n /= 2;
    while (n % 5 === 0) n /= 5;

    if (n !== 1) {
        // not a terminating decimal - has a repeating cycle
        var remainder = 1;
        var count = 0;
        do {
            remainder = (remainder * 10) % n;
            count++;
        } while (remainder !== 1);
        return count;
    } else {
        // terminating decimal - no cycle
        return 0;
    }
};

var largestByIndex = function(prev, current, index, array) {
    return current > array[prev] ? index : prev;
};

var longestRepetend = function(a, b) {
    return range(a, b).map(calculateRepetend).reduce(largestByIndex, 0) + a;
};

console.log(longestRepetend(1, 999));