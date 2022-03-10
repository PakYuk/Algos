int binarySearch(int[] nums, int target) {
 // corner case 处理
 if (nums == null || nums.length == 0) {
 return -1;
 }
int start = 0, end = nums.length - 1;
//要点1:start+1<end
while (start + 1 < end) {
// 要点 2:start + (end - start) / 2
int mid = start + (end - start) / 2;
// 要点3:=, <, > 分开讨论，mid 不 +1 也不 -1
if (nums[mid] == target) {
 return mid;
} else if (nums[mid] < target) {
start = mid;
} else {
end = mid;
}
}
// 要点 4: 循环结束后，单独处理 start 和 end
if (nums[start] == target) {
 return start;
}
if (nums[end] == target) {
return end;
}
return -1;
}