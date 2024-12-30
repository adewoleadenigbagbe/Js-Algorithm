'use strict';
function intersect(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let distinctArr = [];
    if (nums1.length < nums2.length) {
        for (let i = 0; i < nums1.length; i++) {
            for (let j = 0; j < nums2.length; j++) {
                if (nums1[i] === nums2[j]) {
                    distinctArr.push(nums1[i]);
                    break;
                }
            }
        }
    }
    else {
        for (let i = 0; i < nums2.length; i++) {
            for (let j = 0; j < nums1.length; j++) {
                if (nums2[i] === nums1[j]) {
                    distinctArr.push(nums2[i]);
                    break;
                }
            }
        }
    }
    return distinctArr;
};

let distinctElements = intersect([4, 9, 5], [9, 4, 9, 8, 4]);
console.log(distinctElements);