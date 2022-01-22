// Sliding Window used for sloving problems like such:
// In many problems dealing with an array (or a LinkedList), we are asked to find or calculate something among all the subarrays (or sublists) of a given size. For example, take a look at this problem:
// Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.

// i.e
// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
// Output: [2.2, 2.8, 2.4, 3.6, 2.8]

//Naive Solution:
function findAverage(array, k) {
	const result = [];
	//for loop iterate through whole array
	for (let i = 0; i < array.length; i++) {
		sum = 0.0;
		//nested loop adding K elements to get a sum
		for (let j = i; j < i + k; j++) {
			sum += array[j];
		}
		result.push(sum / k);
	}
	return result;
}
