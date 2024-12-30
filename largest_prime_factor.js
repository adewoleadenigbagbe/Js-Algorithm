const lgPf = (num) => {
  let arrayOfPrimeFactors = [];
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      num = num / i;
      arrayOfPrimeFactors.push(i);
    }
  }
  return arrayOfPrimeFactors;
};

console.time("lgPf");
console.log(lgPf(600851475143));
console.timeEnd("lgPf");
