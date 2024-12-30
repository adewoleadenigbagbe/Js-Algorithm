var convert = function (s, numRows) {
    var result = [];
    var step = 1, index = 0;
    for (var i = 0; i < s.length; i++) {
        if (result[index] === undefined) {//'undefined' will be put into string without this
            result[index] = '';
        }
        result[index] += s[i];
        if (index === 0) {
            step = 1;
        } else if (index === numRows - 1) {
            step = -1;
        }
        index += step;
    }
    return result.join('');
};

console.log(convert('PAYPALISHIRING', 3));