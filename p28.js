#!/usr/bin/env node

/*
 * Project Euler: Problem 28 - Number spiral diagonals
 * http://projecteuler.net/problem=28
 *
 * Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
 *
 * 21* 22  23  24  25*
 * 20   7*  8   9* 10
 * 19   6   1*  2  11
 * 18   5*  4   3* 12
 * 17* 16  15  14  13*
 *
 * It can be verified that the sum of the numbers on the diagonals is 101.
 *
 * What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
 */

/*
 * NOTES:
 * Start with 1 in the middle (n = 0)
 * For n = 1, add the next layer to make it 3x3
 * For n = 2, add the next layer to make it 5x5
 * For n = 3, add the next layer to make it 7x7
 * The size is therefore (2n+1)x(2n+1)
 *
 * NorthEast:
 * NE(1) --> 9  = 3^2 = (2*1+1)^2
 * NE(2) --> 25 = 5^2 = (2*2+1)^2
 * NE(3) --> 49 = 7^2 = (2*3+1)^2
 * Therefore NE(n) = (2n+1)^2
 *
 * South West:
 * SW(1) --> 5  = 2^2 + 1 = (2*1)^2 + 1
 * SW(2) --> 17 = 4^2 + 1 = (2*2)^2 + 1
 * sw(3) --> 37 = 6^2 + 1 = (2*3)^2 + 1
 * Therefore SW(n) = (2n)^2 + 1 = 4n^2 + 1
 *
 * North West:
 * NW(1) --> 7  = (5+9)/2   = (SW(1) + NE(1)) / 2
 * NW(2) --> 21 = (17+25)/2 = (SW(2) + NE(2)) / 2
 * NW(3) --> 43 = (37+49)/2 = (SW(3) + NE(3)) / 2
 * Therefore NW(n) = (SW(n) + NE(n))/2
 *
 * South East:
 * SE(1) --> 3  = 1  + 2  =     1 + (0*8) + 2 = 1 + 1x2 + 0x8
 * SE(2) --> 13 = 3  + 10 = SE(1) + (1*8) + 2 = 1 + 2x2 + 1x8
 * SE(3) --> 31 = 13 + 18 = SE(2) + (2*8) + 2 = 1 + 3x2 + 3x8
 * SE(4) --> 57 = 31 + 26 = SE(3) + (3*8) + 2 = 1 + 4x2 + 6x8
 * SE(5) --> 91 = 57 + 34 = SE(4) + (4*8) + 2 = 1 + 5x2 + 10x8
 * Therefore: SE(n) = 1 + 2n + 8*TriangleNumber(n-1)
 *                         = 1 + 2n + 8(n(n-1)/2)
 *                         = 1 + 2n + 4n^2 - 4n
 *                         = 4n^2 - 2n + 1
 *
 * Sum of Diagonals
 * S(0) = 1  (special case - it's the centre)
 * S(1) = 25 = NE(1) + SE(1) + NW(1) + SW(1) + S(0)
 * S(2) = 101 = S(1) + 76 = S(1) + NE(2) + SE(2) + NW(2) + SW(2)
 * S(3) = 261 = S(2) + 160 = S(2) + NE(3) + SE(3) + NW(3) + SW(3)
 * Therefore S(n) = S(n-1) + NE(n) + SE(n) + NW(n) + SW(n)
 *                = S(n-1) + 4(4n^2 + n + 1)        [after plenty of algebra]
 */

var p28 = function(size) {
    var n = (size - 1) / 2;
    var sum = 1; // the centre
    for (var i = 1; i <= n; i++) {
        sum += 4 * (4*i*i + i + 1); // the four diagonal corners
    }
    return sum;
};

console.log(p28(1001));