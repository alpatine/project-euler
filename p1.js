#!/usr/bin/env node

/*
 * Project Euler: Problem 1:
 * http://projecteuler.net/problem=1
 *
 * Problem Description:
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the
 * multiples of 3 or 5 below 1000.
 */

var isAnyMultiple = function(factors, number) {
    for (var i = 0; i < factors.length; i++)
        if (number % factors[i] === 0)
            return true;
}

var findSumOfMultiples = function(factors, max) {
    var sum = 0;

    for (var i = 0; i < max; i++)
        if (isAnyMultiple(factors, i))
            sum += i;

    return sum;
}

console.log(findSumOfMultiples([3, 5], 1000));

