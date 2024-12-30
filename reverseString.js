function reverseString(s) {
    let start = 0;
    let end = s.length - 1;
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;

        start += 1;
        end -= 1;
    }
    console.log(s);
};

reverseString(["l", "e", "v", "e", "l"])