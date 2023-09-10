/*
There are 8 balls numbered from 0 to 7. Seven of them have the same weight. One is heavier. Your task is to find its number.

Your function findBall will receive single argument - scales object. The scales object contains an internally stored array of 8 elements (indexes 0-7), each having the same value except one, which is greater. It also has a public method named getWeight(left, right) which takes two arrays of indexes and returns -1, 0, or 1 based on the accumulation of the values found at the indexes passed are heavier, equal, or lighter.

getWeight returns:

-1 if left pan is heavier

1 if right pan is heavier

0 if both pans weight the same

Examples of scales.getWeight() usage:

scales.getWeight([3], [7]) returns -1 if ball 3 is heavier than ball 7, 1 if ball 7 is heavier, or 0 i these balls have the same weight.

scales.getWeight([3, 4], [5, 2]) returns -1 if weight of balls 3 and 4 is heavier than weight of balls 5 and 2 etc.

So where's the catch, you may ask. Well - the scales is very old. You can use it only 2 TIMES before the scale breaks.
*/

// my naive solution (15ms)
function findBall(scales) {
  // call scales.getWeight() max 2 times
  // return indexOfHeavyBall;
  var pan1 = [0, 1, 2]
  var pan2 = [2, 3, 4]
  var pan3 = [5, 6, 7]
  var w = scales.getWeight(pan2, pan3)
  if (w === 1) {
    w = scales.getWeight([pan3[0]], [pan3[1]])
    if (w === 1) {return pan3[1]}
    if (w === 0) {return pan3[2]}
    if (w === -1) {return pan3[0]}
  }
  if (w === 0) {
    w = scales.getWeight([pan1[0]], [pan1[1]])
    if (w === 1) {return pan1[1]}
    if (w === 0) {return pan1[2]}
    if (w === -1) {return pan1[0]}
  }
  if (w === -1) {
    w = scales.getWeight([pan2[0]], [pan2[1]])
    if (w === 1) {return pan2[1]}
    if (w === 0) {return pan2[2]}
    if (w === -1) {return pan2[0]}
  }
}

//my recursive solution (17ms, 16ms)
function findBallRecursive(scales) {
  // call scales.getWeight() max 2 times
  // return indexOfHeavyBall;
  var pan1 = [0, 1, 2]
  var pan2 = [2, 3, 4]
  var pan3 = [5, 6, 7]
  return finder(pan2, pan3, pan1)
  function finder(l, r, c) {
    var end = false;
    var w = scales.getWeight(l, r)
    if (l.length == 1) { end = true }
    if (w === 1) {
      return end ? r[0] : finder([r[0]], [r[1]], [r[2]])
    }
    if (w === 0) {
      return end ? c[0] : finder([c[0]], [c[1]], [c[2]])
    }
    if (w === -1) {
      return end ? l[0] : finder([l[0]], [l[1]], [l[2]])
    }
  }
}