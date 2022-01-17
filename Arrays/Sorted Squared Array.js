/*
Takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order

Sample Input 
array=[1,2,3,5,6,8,9]

Output
[1,4,9,25,36,64,81]

*/
function sortedSquaredArray(array) {
	//sqaure intergers;
	let squared = [];
	//push every squared intergers in the original array into new array
	array.reduce((previous, current) => {
		squared.push(current * current);
	}, []);
	//sort the new array
	console.log(squared);
	squared = squared.sort((a, b) => a - b);
	return squared;
}
