#!/usr/bin/env node

/*
 * Project Euler: Problem 15 - Lattice paths
 * http://projecteuler.net/problem=15
 *
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6
 * routes to the bottom right corner.
 *
 * <diagram>
 *
 * How many such routes are there through a 20×20 grid?
 */

var factorial = function(n) {
    var product = 1;
    for (var i = 2; i <= n; i++) {
        product *= i;
    }
    return product;
};

var choose = function(n, k) {
    return factorial(n) / factorial(k) / factorial(n - k);
};

var latticePathCount = function(n) {
    return choose(2 * n, n);
};

console.log(latticePathCount(20));