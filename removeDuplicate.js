'use strict';
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums){
    let uniqueArr = [];
    let currentUniqueElem = -1;
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] !== currentUniqueElem){
            uniqueArr.push(nums[index]);
            currentUniqueElem = nums[index];
        }
        
    }
    return uniqueArr.length;
}

let len = removeDuplicates(nums);
console.log(len);

