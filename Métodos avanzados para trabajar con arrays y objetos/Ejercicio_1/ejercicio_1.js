const conditionalSum = (numbersArray) => {
  let numberSum = 0;
  numbersArray.forEach((number) => {
    if (number > 10 && number % 3 === 0) {
      numberSum += number;
    }
  });

  return numberSum;
};

console.log(conditionalSum([5, 12, 18, 7, 21, 30]));
