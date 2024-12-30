function findShortestSubArray(nums) {
    let degreeCnt = 0;
    let map = new Map();
    let result = null;
    nums.forEach((value, index) => {
        if (!map.has(value)) {
            map.set(value, { 'de': 1, 'dis': 0, 'begin': index });
        } else {
            let obj = map.get(value);
            ++obj.de;
            obj.dis = index - obj.begin + 1;
        }
    });
    for (let value of map.values()) {
        if (value.de > degreeCnt) {
            degreeCnt = value.de;
            result = value.dis;
        } else if (value.de == degreeCnt) {
            result = Math.min(value.dis, result);
        }
    }

    return result || 1;

}