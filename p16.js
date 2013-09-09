#!/usr/bin/env node

/*
 * Project Euler: Problem 16 - Power digit sum
 * http://projecteuler.net/problem=16
 *
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26;
 *
 * What is the sum of the digits of the number 2^1000?
 */

var nthPowerOf2 = function(power) {
    var output = [2];

    for (var i = 2; i <= power; i++) {
        var carry = 0;
        for (j = output.length - 1; j >= 0; j--) {
            var product = 2 * output[j] + carry;
            output[j] = product % 10;
            carry = Math.floor(product / 10);
        }
        if (carry) output.unshift(carry);
    }
    return output;
};

var sum = function(a, b) {
    return a + b;
};

console.log(nthPowerOf2(1000).reduce(sum));