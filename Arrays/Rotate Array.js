/**
 *Given an array, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100] 
 *
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
	k %= nums.length; //when k > nums.length; after the num.length rotate it will stays the same
	console.log(k);
	const reverse = (i, j) => {
		while (i < j) {
			let temp = nums[i];
			nums[i] = nums[j];
			nums[j] = temp;
			i++;
			j--;
		}
	};
	reverse(0, nums.length - 1);
	reverse(0, k - 1);
	reverse(k, nums.length - 1);
};

//time limit Exceeded
var rotate = function (nums, k) {
	k = k % nums.length;

	while (k > 0) {
		nums.unshift(nums.pop());
		k--;
	}
	return nums;
};
