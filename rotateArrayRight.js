'use strict';
let arr = [-1, -100, 3, 99];

function rotateRight(nums,k){
    nums = arr;
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < nums.length - 1; j++) {       
            let temp = nums[nums.length - j - 1];
            nums[nums.length - j - 1] = nums[nums.length - j - 2];
            nums[nums.length - j - 2] = temp;
        }        
    }
}

rotateRight(arr, 2);
console.log(arr);