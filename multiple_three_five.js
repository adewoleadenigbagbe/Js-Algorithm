"use strict";

function sum_multiple_of_three_five() {
  const end = 10;
  let sum = 0;
  for (let i = 0; i < end; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sum_multiple_of_three_five());
