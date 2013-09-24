#!/usr/bin/env node

/*
 * Project Euler: Problem 35 - Circular primes
 * http://projecteuler.net/problem=35
 *
 * The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves
 * prime.
 *
 * There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
 *
 * How many circular primes are there below one million?
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

var calculateRotations = function(n) {
    var digits = String(n).split("");
    var outputs = [];
    for (var start = 1; start < digits.length; start++) {
        var out = [];
        for (var i = 0; i < digits.length; i++) {
            out.push(digits[(start + i) % digits.length]);
        }
        outputs.push(Number(out.join("")));
    }
    return outputs;
};

var findCircularPrimeCount = function(n) {
    var primes = calculatePrimesTo(n);
    var circularPrimes = [];
    for (var i = 0; i < primes.length; i++) {
        var prime = String(primes[i]);
        var rotations = calculateRotations(prime);
        var isPrime = true;
        for (var j = 0; j < rotations.length; j++) {
            var index = primes.indexOf(rotations[j]);
            if (index == -1) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) circularPrimes.push(prime);
    }
    return circularPrimes.length;
};

console.log(findCircularPrimeCount(1000000));