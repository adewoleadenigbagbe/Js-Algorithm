let numberAlphabetMap = new Map();
numberAlphabetMap.set(1, "one");
numberAlphabetMap.set(2, "two");
numberAlphabetMap.set(3, "three");
numberAlphabetMap.set(4, "four");
numberAlphabetMap.set(5, "five");
numberAlphabetMap.set(6, "six");
numberAlphabetMap.set(7, "seven");
numberAlphabetMap.set(8, "eight");
numberAlphabetMap.set(9, "nine");
numberAlphabetMap.set(10, "ten");
numberAlphabetMap.set(11, "eleven");
numberAlphabetMap.set(12, "twelve");
numberAlphabetMap.set(13, "thirteen");
numberAlphabetMap.set(14, "fourteen");
numberAlphabetMap.set(15, "fifteen");
numberAlphabetMap.set(16, "sixteen");
numberAlphabetMap.set(17, "seventeen");
numberAlphabetMap.set(18, "eighteen");
numberAlphabetMap.set(19, "nineteen");
numberAlphabetMap.set(20, "twenty");
numberAlphabetMap.set(30, "thirty");
numberAlphabetMap.set(40, "forty");
numberAlphabetMap.set(50, "fifty");
numberAlphabetMap.set(60, "sixty");
numberAlphabetMap.set(70, "seventy");
numberAlphabetMap.set(80, "eighty");
numberAlphabetMap.set(90, "ninety");
numberAlphabetMap.set(100, "hundred");
numberAlphabetMap.set(1000, "thousand");

function sumLetterOfNumber() {
    let sum = 0;
    for (let i = 1; i <= 1000; i++) {
        let strBuilder = "";
        let j = i;
        do {
            if (j >= 20 && j <= 99) {
                strBuilder += numberAlphabetMap.get((~~(j / 10) * 10));
                j = j % 10;
                if (j === 0) {
                    break;
                }
            }
            else if (j >= 100 && j <= 999) {
                strBuilder += numberAlphabetMap.get(~~(j / 100));
                strBuilder += numberAlphabetMap.get(100);

                j = j % 100;

                if (j === 0) {
                    break;
                }
                strBuilder += "and";
            } else if (j === 1000) {
                strBuilder += numberAlphabetMap.get(~~(j / 1000));;
                strBuilder += numberAlphabetMap.get(1000);;

                j = j % 1000;

                if (j === 0) {
                    break;
                }
            }
        } while (j > 20)
        if (j !== 0) {
            let units = numberAlphabetMap.get(j);
            strBuilder += units;
        }
        sum += strBuilder.length;
    }
    return sum;
}
console.log(sumLetterOfNumber());


