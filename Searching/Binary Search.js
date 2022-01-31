function binarySearch(array, target) {
	// Write your code here.
	let low = 0,
		high = array.length - 1;
	while (low <= high) {
		const mid = Math.floor(low + (high - low) / 2); //to prevent overflow
		if (array[mid] === target) return mid;
		else if (array[mid] > target) high--;
		else low++;
	}
	return -1;
}
