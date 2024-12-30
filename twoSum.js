function twoSum(nums, target) {
    let ret = [];
    let hasMap = new Map();
    for (let i = 0; i < nums.length; i++) {    
        if (!(hasMap.has(target - nums[i]))){
            hasMap.set(nums[i],i);
        }else{
            ret.push(hasMap.get(target - nums[i]))
            ret.push(i);
        }
    }
    return ret;
};
console.log(twoSum([2, 7, 11, 15],9));