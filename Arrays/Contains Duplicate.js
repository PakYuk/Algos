/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
//hash table
function(nums) {
    const visited={};
    for(let i=0; i< nums.length; i++){
        if(nums[i]in visited){
            return true;
        }else{
            visited[nums[i]]=i;
        }
    }
    return false;
};

//two pointer
var containsDuplicate = function(nums) {
    const num=nums.sort((a, b) => a-b );
    let left = 0;
    let right = 1;
    
    while(left < right && right < num.length) {
         if(num[left] === num[right]) return true;
        else{
            left = right;
            right++;
        }
    }
    
    return false;
};
