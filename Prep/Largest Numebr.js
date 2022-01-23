// Given an integer n, return the largest number that contains exactly n digits.

// Example

// For n = 2, the output should be
// solution(n) = 99.
function solution(n) {
	let num = '';
	while (n > 0) {
		num += '9';
		n--;
	}
	return Number(num);
}
