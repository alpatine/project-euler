#!/usr/bin/env node

/*
 * Project Euler: Problem 31 - Coin sums
 * http://projecteuler.net/problem=31
 *
 * In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
 *
 * 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
 * It is possible to make £2 in the following way:
 *
 * 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 * How many different ways can £2 be made using any number of coins?
 */

var splitTotal = function me(total, coins, minPos) {
    if (total === 0) return 1;

    var count = 0;
    for (var i = minPos; i < coins.length; i++) {
        if (coins[i] > total) continue;
        count += me(total - coins[i], coins, i);
    }
    return count;
};

console.log(splitTotal(200, [200, 100, 50, 20, 10, 5, 2, 1], 0));