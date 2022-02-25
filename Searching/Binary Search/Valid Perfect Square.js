/*Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.

 

Example 1:

Input: num = 16
Output: true
Example 2:

Input: num = 14
Output: false
*/
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
	if (num === 1) return true;
	let i = 0;
	let j = Math.floor(num / 2);

	while (i <= j) {
		const mid = Math.floor(i + (j - i) / 2);
		if (mid * mid === num) {
			return true;
		} else if (mid * mid < num) {
			i = mid + 1;
		} else {
			j = mid - 1;
		}
	}
	return false;
};
