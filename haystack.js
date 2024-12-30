function strStr(haystack, needle){
    for (let i = 0; ; i++) {
        for (let j = 0; ; j++) {
            if (j == needle.length) return i; //found
            if (i + j == haystack.length) return -1; //not found
            if (needle.charAt(j) != haystack.charAt(i + j)) break; //break out of outer loop
        }
    }
}

console.log(strStr("helllao","lla"));