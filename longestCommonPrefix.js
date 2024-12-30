'use strict';

function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            console.log(str[i]);
            console.log(strs[0][i]);
            if (str[i] !== strs[0][i]) {
                return str.slice(0, i);
            }
        }
    }

    return strs[0];
}

let minimum = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(minimum);