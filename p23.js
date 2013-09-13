#!/usr/bin/env node

/*
 * Project Euler: Problem 23 - Non-abundant sums
 * http://projecteuler.net/problem=23
 *
 * A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example,
 * the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
 *
 * A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this
 * sum exceeds n.
 *
 * As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of
 * two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be
 * written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even
 * though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than
 * this limit.
 *
 * Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

var findDivisors = function(n) {
    var divisors = [];
    for (var i = 1; i <= n/2; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
};

var sum = function(a, b) {
    return a + b;
};

var isAbundant = function(n) {
    return findDivisors(n).reduce(sum) > n;
};

var findAbundantNumbers = function() {
    var abundantNumbers = [];
    for (var n = 12; n <= 28123; n++) {
        if (isAbundant(n)) abundantNumbers.push(n);
    }
    return abundantNumbers;
};

var sumNonAbundantNumbers = function() {
    var abundantNumbers = findAbundantNumbers();
    var abundantNumberSums = [];
    for (var i = 0; i < abundantNumbers.length; i++) {
        for (var j = i, sum = 0;
             j < abundantNumbers.length && (sum = abundantNumbers[i] + abundantNumbers[j]) <= 28123;
             j++) {
             abundantNumberSums[sum] = true;
        }
    }

    var nonAbundantNumberSum = 0;
    for (var k = 1; k < abundantNumberSums.length; k++) {
        if (!abundantNumberSums[k]) {
            nonAbundantNumberSum += k;
        }
    }

    return nonAbundantNumberSum;
};

console.log(sumNonAbundantNumbers());