#!/usr/bin/env node

/*
 * Project Euler: Problem 3 - Largest prime factor
 * http://projecteuler.net/problem=3
 *
 * Problem Description:
 * The prime factors of 13195 are 5, 7, 13, and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */

var calculatePrimesTo = function(max) {
    // Sieve of Eratosthenes
    var isPrime = [];
    var primes = [];

    for (var i = 2; i <= max; i++)
        isPrime[i] = true;

    for (var i = 2; i*i <= max; i++)
        if (isPrime[i])
            for (var j = i; i*j <= max; j++)
                isPrime[i*j] = false;

    for (var i = 2; i <= max; i++)
        if (isPrime[i])
            primes.push(i);

    return primes;
};

var highestPrimeFactor = function(n) {
    var primes = calculatePrimesTo(Math.sqrt(n));
    for (var i = primes.length - 1; i >= 0; i--)
        if (n % primes[i] === 0)
            return primes[i];

    return n;
};

console.log(highestPrimeFactor(600851475143));