#!/usr/bin/env node

/*
 * Project Euler: Problem 37 - Truncatable primes
 * http://projecteuler.net/problem=37
 *
 * The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from
 * left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797,
 * 379, 37, and 3.
 *
 * Find the sum of the only eleven primes that are both truncatable from left to right and right to left.
 *
 * NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
 */

// Sieve of Eratosthenes
var calculatePrimesTo = function(max) {
    var isPrime = [];
    var primes = [];

    for (var i = 2; i <= max; i++) {
        isPrime[i] = true;
    }

    for (i = 2; i*i <= max; i++) {
        if (isPrime[i]) {
            for (var j = i; i*j <= max; j++) {
                isPrime[i*j] = false;
            }
        }
    }

    for (i = 2; i <= max; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
};

var isTruncatableLeft = function(primes, base) {
    while (base = String(base).substring(1)) {
        base = Number(base);
        if (primes.indexOf(base) == -1) {
            return false;
        }
    }
    return true;
};

var findTruncatablePrimes = function findTruncatablePrimes(primes, base) {
    var suffixes = [1, 3, 7, 9];
    var output = [];
    for (var i = 0; i < suffixes.length; i++) {
        var newBase = Number(String(base) + String(suffixes[i]));
        if (primes.indexOf(newBase) != -1) {
            if (isTruncatableLeft(primes, newBase)) output.push(newBase);
            output = output.concat(findTruncatablePrimes(primes, newBase));
        }
    }
    return output;
};

var numberCompare = function(a, b) {
    return a - b;
};

var sum = function(a, b) {
    return a + b;
};

var p37 = function(max) {
    var basePrimes = [2, 3, 5, 7];
    var primes = calculatePrimesTo(max);
    var truncatablePrimes = [];
    for (var i = 0; i <= basePrimes.length; i++) {
        truncatablePrimes = truncatablePrimes.concat(findTruncatablePrimes(primes, basePrimes[i]));
    }

    // sort and merge
    truncatablePrimes.sort(numberCompare);
    return truncatablePrimes.reduce(sum);
};

console.log(p37(1000000));