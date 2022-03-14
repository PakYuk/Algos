// Difficulty: Easy

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

// Sample Input
// array=[3,5,-4,8,11,1,-1,6]
// Sample Output
// [-1, 11]

// Solution 1

function twoNumberSum(array, targetSum) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		for (let k = i + 1; k < array.length; k++) {
			if (array[i] + array[k] === targetSum && result.length < 2) {
				result.push(array[i], array[k]);
			}
		}
	}
	return result;
}

//Solution 2 hashmap
const twoSum = function (nums, target) {
	const pairs = {}; //create hashmap to store all visited numbers
	for (let i = 0; i < nums.length; i++) {
		let potentialMatch = target - nums[i];
		if (potentialMatch in pairs) {
			return [pairs[potentialMatch], i];
		} else {
			pairs[nums[i]] = i;
		}
	}
};

//two pointer
const twoSum = (nums, target) => {
	const num = nums.sort((a, b) => a - b);
	let left = 0;
	let right = num.length - 1;
	let currentSum = num[left] + num[right];

	while (left < right) {
		if (currentSum < target) {
			left++;
		}
		if (currentSum > target) {
			right--;
		} else {
			return [left, right];
		}
	}

	return -1;
};
