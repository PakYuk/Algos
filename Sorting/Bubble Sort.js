const swap = (array, idx1, idx2) => {
	[array[idx1], array[idx2]] = [array[idx2], array[idx1]];
};

const bubbleSort = (array) => {
	for (let i = 0; i < array.length; i++) {
		let swapped = false;
		for (let j = 0; j < array.length - i; j++) {
			// first# = array[j-1], second# = array[j];
			if (array[j - 1] > array[j]) {
				swap(array, j - 1, j);
				swapped = true;
			}
		}
		if (!swapped) break;
	}
	return array;
};
