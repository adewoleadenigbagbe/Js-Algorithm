function startsWith(word, prefix){
    if (prefix.length === 0){
        return true
    }

    if (prefix.length > word.length){
        return false
    }

    for (let index = 0; index < prefix.length; index++) {
        if(prefix[index] !== word[index]){
            return false
        }
        
    }

    return true
}

console.log(startsWith("hello world!", "hello"))
console.log(startsWith("hello world!", "HELLO"))
console.log(startsWith("nowai", "nowaisir"))