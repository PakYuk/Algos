/**
 * Give a positive integer number n, your task is to calculate the difference between the product of it's digits and the sum of its digits.
 * Note: the order matters; the answer should be of the form product - sum;
 * Example:
 * n=123456;
 * the product of digits is equal to 1*2*3*4*5*6 = 720;
 * the sum of digits is 1+2+3+4+5+6 = 21
 * result is 720 - 21 = 699;
 */

const difference = (n) => {
	let product = 1;
	let sum = 0;
	while (n > 0) {
		const current = n % 10;
		sum += current;
		product *= current;
		n = Math.floor(n / 10);
	}
	return product - sum;
};
