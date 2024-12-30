'use strict'

console.time("MaxArea")
function maxArea(height) {
    let maxarea = 0;
    for (let i = 0; i < height.length; i++)
        for (let j = i + 1; j < height.length; j++)
            maxarea = Math.max(maxarea, Math.min(height[i], height[j]) * (j - i));
    return maxarea;
};
console.timeEnd("MaxArea")


console.time("MaxArea2")
function maxArea2(height) {
    let maxarea = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
        if (height[l] < height[r])
            l++;
        else
            r--;
    }
    return maxarea;
}
console.timeEnd("MaxArea2")


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));