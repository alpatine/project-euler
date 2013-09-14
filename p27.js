#!/usr/bin/env node

/*
 * Project Euler: Problem 27 - Quadratic primes
 * http://projecteuler.net/problem=27
 *
 * Euler discovered the remarkable quadratic formula:
 *
 *      n^2 + n + 41
 *
 * It turns out that the formula will produce 40 primes for the consecutive values n = 0 to 39. However, when n = 40,
 * 40^2 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41^2 + 41 + 41 is clearly divisible
 * by 41.
 *
 * The incredible formula  n^2 − 79n + 1601 was discovered, which produces 80 primes for the consecutive values n = 0
 * to 79. The product of the coefficients, −79 and 1601, is −126479.
 *
 * Considering quadratics of the form:
 *
 *      n^2 + an + b, where |a| < 1000 and |b| < 1000
 *
 *      where |n| is the modulus/absolute value of n
 *      e.g. |11| = 11 and |−4| = 4
 *
 * Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of
 * primes for consecutive values of n, starting with n = 0.
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

var isPrime = function(n, primes) {
    var maxCheck = Math.sqrt(Math.abs(n));
    //console.log("maxCheck: " + maxCheck);
    //console.log(primes);
    for (var i = 0; primes[i] <= maxCheck; i++) {
        if (n % primes[i] === 0) {
            return false;
        }
    }
    return true;
};

var quadratic = function(a, b, n) {
    return n*n + a*n + b;
};

// As soon as n == b the quadratic is not prime (b is present in every term).
// Given this, the largest value possible from the quadratic is when a and b are at max and n == b - 1
var p27 = function(limit) {
    var primes = calculatePrimesTo(Math.sqrt(quadratic(limit, limit, limit-1)));
    var maxN = 0;
    var maxA, maxB;

    for (var a = -limit; a <= limit; a++) {
        for (var b = -limit; b <= limit; b++) {
            for (var n = 0; n < b && isPrime(Math.abs(quadratic(a, b, n)), primes); n++) {} // empty for body
            if (n > maxN) {
                maxN = n;
                maxA = a;
                maxB = b;
            }
        }
    }

    return maxA * maxB;
};

console.log(p27(999));

