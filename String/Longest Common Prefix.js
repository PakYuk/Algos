/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
	return strs.reduce((prev, current) => {
		let i = 0;
		while (prev[i] && current[i] && prev[i] === current[i]) {
			//prevent infinite loop with case like ["","",""]
			i++;
		}
		return prev.slice(0, i);
	});
};
