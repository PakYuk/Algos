//find if the word is a Palindrome i.e eye    aaabaaa
function solution(inputString) {
	for (let i = 0; i < inputString.length / 2; i++) {
		if (inputString[i] !== inputString[inputString.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
