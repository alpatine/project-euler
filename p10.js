#!/usr/bin/env node

/*
 * Project Euler: Problem 10 - Summation of primes
 * http://projecteuler.net/problem=10
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */

var calculatePrimesTo = function(max) {
    // Sieve of Eratosthenes
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

var sumPrimesTo = function(n) {
    var primes = calculatePrimesTo(n);
    return primes.reduce(function(a, b) {
        return a + b;
    });
}

console.log(sumPrimesTo(1999999));