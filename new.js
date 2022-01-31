function isVowel(ch) {
	if (ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u')
		return false;

	return true;
}

// Function that replaces consonant with
// next immediate consonant alphabetically
function solution(message) {
	for (var i = 0; i < message.length; i++) {
		if (!isVowel(meesage[i])) {
			// if character is z,
			// than replace it with character b
			if (message[i] == 'z') message[i] = 'b';
			// if the alphabet is not z
			else {
				// replace the element with
				// next immediate alphabet
				message[i] = String.fromCharCode(message[i].charCodeAt(0) + 1);

				// if next immediate alphabet is vowel,
				// than take next 2nd immediate alphabet
				// (since no two vowels occurs consecutively
				// in alphabets) hence no further
				// checking is required
				if (isVowel(message[i]))
					message[i] = String.fromCharCode(message[i].charCodeAt(0) + 1);
			}
		}
	}

	return s.join('');
}
