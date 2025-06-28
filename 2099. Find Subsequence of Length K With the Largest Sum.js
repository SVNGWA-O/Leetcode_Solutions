/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  // Sort the values
  let sorted_value = nums.sort((a, b) => b - a);

  // Pick the values that have index numbers that are equal to k-1
  let new_group = sorted_value.slice(0, k);

  return new_group.sort((a, b) => a - b);
};
