function largestPalindromeProduct(){
    let PalindromeArray = [];
    let start = 100;
    let end = 1000;

    for (let i = start; i < end; i++) {
        for (let j = start; j < end; j++) {
            let product = (i * j).toString();
            if(isPalindrome(product)){
                PalindromeArray.push(product);
            }
        }      
    }
    return PalindromeArray;
}

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

largestPalindromeProduct().forEach((word) => console.log(word));
