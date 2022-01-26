//find if the word is a Palindrome i.e eye    aaabaaa

//solution 1
function solution(inputString) {
	for (let i = 0; i < inputString.length / 2; i++) {
		if (inputString[i] !== inputString[inputString.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

//solution 2
function isPalindrome(string) {
	// Write your code here.
	for (let i = 0; i < string.length; i++) {
		let left = 0;
		let right = string.length - 1;
		while (left < right) {
			if (string[left] === string[right]) {
				left++;
				right--;
			} else {
				return false;
			}
		}
	}
	return true;
}
