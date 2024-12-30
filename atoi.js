'use strict';

function atoi(s) {
    if (s.length === 0)
        return 0;

    s = s.trim();

    let extractedCharacters = "";

    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            if (s.charCodeAt(i) === 45 || (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)) {
                extractedCharacters += s[0];
            }
        } else {
            if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
                extractedCharacters += s[i];
            } else {
                break;
            }
        }
    }
    if (extractedCharacters.length === 0) {
        return 0;
    }
    let num = parseInt(extractedCharacters);
    if (num < -2147483648) {
        return -2147483648
    }
    return num;
}

console.log(atoi("  a42   "));