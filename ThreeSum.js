function threeSum(nums) {
    nums = nums.sort((a, b) => a - b);
    let result = [];
    let zero = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] != nums[i - 1])) {
            let partialTarget = zero - nums[i];
            let low = i + 1;
            let high = nums.length - 1;

            while (low < high) {
                let partialSum2 = nums[low] + nums[high];
                if (partialSum2 === partialTarget) {
                    let arr = [];
                    arr.push(partialTarget, nums[low], nums[high]);
                    result.push(arr);
                    high--;
                    low++;
                    while (low < high && nums[low] === nums[low + 1]) {
                        low++;
                    }
                    while (low < high && nums[high] === nums[high - 1]) {
                        high--;
                    }
                } else if (partialSum2 > partialTarget) {
                    high--;
                } else {
                    low++
                }
            }
        }

    }
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));