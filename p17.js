#!/usr/bin/env node

/*
 * Project Euler: Problem 17 - Number letter counts
 * http://projecteuler.net/problem=17
 *
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19
 * letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115
 * (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with
 * British usage.
 */

var numberToWords = function(n) {
    var ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
        "nineteen"];
    var orders = ["", "thousand"];

    var numString = String(n);

    // If required front pad the string with 0s
    if (numString.length % 3 !== 0) {
        numString = ("000" + numString).slice(numString.length % 3);
    }

    var output = [];
    for (var i = 0; i < numString.length; i += 3) {
        var h = Number(numString.substring(i, i + 1));
        var t = Number(numString.substring(i + 1, i + 2));
        var o = Number(numString.substring(i + 2, i + 3));

        if (h > 0) {
            output.push(ones[h] + "hundred");
            if (t != 0 || o != 0) {
                output.push("and");
            }
        }
        if (t == 1) {
            output.push(teens[o]);
        } else {
            output.push(tens[t]);
            output.push(ones[o]);
        }

        output.push(orders[(numString.length - i) / 3 - 1]);
    }

    return output.join("");
};

var problem17 = function(n) {
    var length = 0;
    for (var i = 1; i <= n; i++) {
        length += numberToWords(i).length;
    }
    return length;
};

console.log(problem17(1000));