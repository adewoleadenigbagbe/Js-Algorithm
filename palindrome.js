'use strict';

function isPalindrome(word) {
    word = word.trim();

    let start = 0;
    let end = word.length - 1;

    while (start <= end) {       
        if (word[start] !== word[end]) {
            return false;
        }      
        start += 1;
        end -= 1;
    }
    return true;
}

console.log(isPalindrome("  racecar   "));
