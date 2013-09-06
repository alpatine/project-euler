#!/usr/bin/env node

/*
 * Project Euler: Problem 9 - Special Pythagorean triplet
 * http://projecteuler.net/problem=9
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2.
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 * Notes:
 * I've added extra logging to show the triples being checked...
 */

// t = pythagorean triple, c always gets bigger
var childA = function(t) {
    return {
        a: t.a - 2 * t.b + 2 * t.c,
        b: 2 * t.a - t.b + 2 * t.c,
        c: 2 * t.a - 2 * t.b + 3 * t.c
    };
};

// t = pythagorean triple, c always gets bigger
var childB = function(t) {
    return {
        a: t.a + 2 * t.b + 2 * t.c,
        b: 2 * t.a + t.b + 2 * t.c,
        c: 2 * t.a + 2 * t.b + 3 * t.c
    };
};

// t = pythagorean triple, c always gets bigger
var childC = function(t) {
    return {
        a: -t.a + 2 * t.b + 2 * t.c,
        b: -2 * t.a + t.b + 2 * t.c,
        c: -2 * t.a + 2 * t.b + 3 * t.c
    };
};

var findPythagoreanTripleWithSum = function(targetSum) {
    var triples = [ {a:3, b:4, c:5} ];

    for (var i = 0; i < triples.length; i++) {
        var t = triples[i];
        console.log(t);
        if (t.c < targetSum) {
            var sum = t.a + t.b + t.c;
            if(targetSum % sum === 0) {
                var scalar = targetSum / sum;
                console.log("Scalar: " + scalar);
                return {a: t.a * scalar, b: t.b * scalar, c: t.c * scalar};
            } else {
                triples.push(childA(t), childB(t), childC(t));
            }
        }
    }

    return null;
};

var t = findPythagoreanTripleWithSum(1000);
if (t) {
    console.log("Triple: a=" + t.a + " b=" + t.b + " c=" + t.c);
    console.log("Sum: " + (t.a + t.b + t.c));
    console.log("Product: " + (t.a * t.b * t.c));
} else {
    console.log("Not Found");
}
