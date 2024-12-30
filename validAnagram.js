console.time("ISANAGRAM")
function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    let s1 = s.split('').sort();
    let t1 = t.split('').sort();

    if (s1.toString() === t1.toString()) {
        return true;
    }
    return false;
};
console.timeEnd("ISANAGRAM")

console.time("ISANAGRAM2")
function isAnagram2(s, t) {
    if (s.length !== t.length)
        return false;

    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[i]) {
            continue;
        } else {
            if (map.has(s[i])) {
                let val = map.get(s[i]);
                if (val === 1) {
                    map.delete(s[i]);
                } else {
                    val -= 1;
                    map.set(s[i], val);
                }
            } else {
                map.set(s[i], 1);
            }

            if (map.has(t[i])) {
                let val = map.get(t[i]);
                if (val === 1) {
                    map.delete(t[i]);
                } else {
                    val -= 1;
                    map.set(t[i], val);
                }
            } else {
                map.set(t[i], 1);
            }
        }
    }

    if (map.size === 0) {
        return true;
    }
    return false;
};
console.timeEnd("ISANAGRAM2")


// console.log(isAnagram("cat", "rat"));
// console.log(isAnagram2("cat", "rat"));

let book = '-9Harry Potter';
console.log(book.charCodeAt(0));


