/*Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "99", num2 = "99"
Output: "1818"

*/
const addStrings = (a, b) => {
	let result = '';
	let carry = 0;
	let aEnd = a.length - 1;
	let bEnd = b.length - 1;
	while (aEnd >= 0 || bEnd >= 0) {
		let sum = (a[aEnd] - '0' || 0) + (b[bEnd] - '0' || 0);
		carry = sum > 9 ? 1 : 0;
		sum %= 10;
		result = carry + `${sum}` + result;
		aEnd--;
		bEnd--;
	}
	return result;
};

console.log(addStrings('99', '99'));
