#!/usr/bin/env node

/*
 * Project Euler: Problem 7 - 10001st prime
 * http://projecteuler.net/problem=7
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 *
 */

// Returns a number guaranteed to be greater than the nth prime - Rosser's Theorem
// Only works for n > 6;
var calculatePrimeUpperBound = function(n) {
    return Math.ceil(n * (Math.log(n) + Math.log(Math.log(n))));
};

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

// Only works for n > 6
var calculateNthPrime = function(n) {
    return calculatePrimesTo(calculatePrimeUpperBound(n))[n-1];
};

console.log(calculateNthPrime(10001));