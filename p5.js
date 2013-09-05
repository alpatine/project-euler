#!/usr/bin/env node

/*
 * Project Euler: Problem 5 - Smallest multiple
 * http://projecteuler.net/problem=5
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 */

// Greatest Common Divisor - Euclidean Algorithm
var gcd = function(a, b) {
    var temp;
    while (b !== 0) {
        temp = b;
        b = a % temp;
        a = temp;
    }
    return a;
};

// Least common multiple
var lcm = function(a, b) {
    return a / gcd(a, b) * b;
};

// generates an array of numbers from a to b
var range = function(a, b) {
    var out = [];
    for(var i = a; i <= b; i++) {
        out[i - a] = i;
    }
    return out;
};

console.log(range(1, 20).reduce(lcm));