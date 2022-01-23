// Define a function, myIndexOf, that accepts three arguments:

// source (string)
// searchValue (string)
// startIdx (number, optional)
// If the source contains the searchValue, return the index at which the searchValue starts. If the searchValue appears more than once in the source, return the index from the first occurrence of the searchValue. If the searchValue doesn't exist in the source, return -1.

// If a startIdx is passed into the function, ignore any instances of the searchValue that occur before startIdx. If no startIdx is provided, start searching from the beginning of the source.

function myIndexOf(source, searchValue, startIdx = 0) {
	for (let i = startIdx; i < source.length; i++) {
		if (source.slice(i, searchValue.length) === searchValue) {
			return i;
		}
	}
	return -1;
}
