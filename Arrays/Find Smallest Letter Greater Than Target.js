/*

Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

Note that the letters wrap around.

For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
 

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Example 3:

Input: letters = ["c","f","j"], target = "d"
Output: "f"

*/
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
	let left = 0;
	let right = letters.length - 1;

	while (left <= right) {
		const mid = Math.floor(left + (right - left) / 2);
		if (letters[mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return letters.length === left ? letters[0] : letters[left];
};
