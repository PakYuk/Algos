function threeNumberSum(array, targetSum) {
	// Write your code here.
	arr = array.sort((a, b) => a - b);
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		let num1 = arr[i];
		let lIdx = i + 1;
		let rIdx = arr.length - 1;

		while (lIdx < rIdx) {
			let currentSum = num1 + arr[lIdx] + arr[rIdx];
			if (currentSum === targetSum) {
				result.push([num1, arr[lIdx], arr[rIdx]]);
				lIdx++;
				rIdx--;
			} else if (currentSum > targetSum) {
				rIdx--;
			} else if (currentSum < targetSum) {
				lIdx++;
			} else {
				return [];
			}
		}
	}
	return result;
}
