#!/usr/bin/env node

/*
 * Project Euler: Problem 12 - Highly divisible triangular number
 * http://projecteuler.net/problem=12
 *
 * The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be
 * 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
 * 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 *
 * Let us list the factors of the first seven triangle numbers:
 * 1: 1
 * 3: 1,3
 * 6: 1,2,3,6
 * 10: 1,2,5,10
 * 15: 1,3,5,15
 * 21: 1,3,7,21
 * 28: 1,2,4,7,14,28
 * We can see that 28 is the first triangle number to have over five divisors.
 *
 * What is the value of the first triangle number to have over five hundred divisors?
 */

// Sieve of Eratosthenes
var calculatePrimesTo = function(max) {
    var isPrime = [];
    var primes = [];

    for (var i = 2; i <= max; i++) {
        isPrime[i] = true;
    }

    for (var i = 2; i*i <= max; i++) {
        if (isPrime[i]) {
            for (var j = i; i*j <= max; j++) {
                isPrime[i*j] = false;
            }
        }
    }

    for (var i = 2; i <= max; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
};

var countDivisors = function(n) {
    var primes = calculatePrimesTo(Math.sqrt(n));
    var count = 1;
    for (var i = 0; i < primes.length; i++) {
        var prime = primes[i];
        if (n % prime === 0) {
            for (var y = 2; n % Math.pow(prime, y) === 0; y++) {
                // empty for body
            }
            count *= y;
        }
    }
    return count;
};

var problem12 = function(numDivisors) {
    var triNum = 0;
    for (var x = 1, divCount = 0; divCount < numDivisors; x++) {
        triNum += x;
        divCount = countDivisors(triNum);
    }

    return triNum;
};

console.log(problem12(501));